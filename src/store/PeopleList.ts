import {
  applySnapshot,
  destroy,
  flow,
  getRoot,
  getSnapshot,
  Instance,
  SnapshotIn,
  types
} from "mobx-state-tree";
import { PERSON_DETAILS_MODAL_ID } from "../components/PersonDetailsModal/PersonDetailsModal";
import { formatKeys, searchStringIgnoreCase } from "../utils";
import { EDIT_PERSON_MODAL_ID } from "../components/EditPersonModal/EditPersonModal";
import { IStore } from "./main";
import Person, { IPerson, IPersonSnapshotIn } from "./Person";
import Pagination from "./Pagination";
import EditPerson, {
  IContactValues,
  IEditPerson,
  IEditPersonSnapshotIn,
  IEditPersonValues,
  IPersonRequestBody
} from "./EditPerson";
import apiRequest from "./apiRequest";
import { IWarningModelSnapshotIn, WARNING_ACTIONS } from "./WarningModel";
import { ChangeEvent } from "react";

interface IPersonChangeProps {
  id?: string;
  isEdit: boolean;
  body: IPersonRequestBody;
}

const ListCache = types
  .model("ListCacheModel", {
    pageId: types.number,
    content: types.array(Person)
  })
  .actions(self => {
    const updateList = (list: IPersonSnapshotIn[]) => {
      try {
        applySnapshot(self.content, list);
      } catch (e) {
        console.error(e);
      }
    };
    return {
      updateList
    };
  });

export interface IListCache extends Instance<typeof ListCache> {}
export interface IListCacheSnapshotIn extends SnapshotIn<typeof ListCache> {}

const PeopleList = types
  .model("PeopleListModel", {
    defaultCaption: "People list",
    addLabel: "Add person",
    cache: types.array(ListCache),
    searchResult: types.array(Person),
    isLoadingList: true,
    isLoadingAdditionalItems: false,
    selectedPerson: types.maybe(types.reference(Person)),
    editPerson: types.maybe(EditPerson),
    pagination: types.optional(Pagination, {}),
    pendingDelete: false,
    totalCount: 0,
    searchQuery: ""
  })
  .views(self => ({
    get store(): IStore {
      return getRoot(self);
    },
    get caption(): string {
      if (!this.haveValidSearch) return self.defaultCaption;
      return `Search result for "${self.searchQuery}"`;
    },
    getFromCache(pageId: number): IListCache | undefined {
      return self.cache.find(fragment => fragment.pageId === pageId);
    },
    get currentListFragment() {
      return self.cache.find(
        fragment => fragment.pageId === self.pagination.currentPage
      );
    },
    get list(): IPerson[] {
      if (this.haveValidSearch) {
        return this.totalSearchResult;
      }
      if (!this.currentListFragment) {
        return [];
      }
      return this.currentListFragment.content;
    },
    get allItems(): IPerson[] {
      const allContent: IPerson[][] = self.cache.map(
        fragment => fragment.content
      );
      return allContent.flat();
    },
    get isEmpty(): boolean {
      if (!this.haveValidSearch) {
        return !self.isLoadingList && !this.allItems.length;
      }
      return !self.isLoadingAdditionalItems && !this.totalSearchResult.length;
    },
    get shouldAddToEnd(): boolean {
      if (this.haveValidSearch) return false;
      return (
        self.pagination.onTheLastPage &&
        this.list.length < self.pagination.limit
      );
    },
    get haveValidSearch(): boolean {
      return self.searchQuery.length > 2;
    },
    get allItemsByQuery(): IPerson[] {
      if (!this.haveValidSearch) return [];
      return this.allItems.filter(item =>
        searchStringIgnoreCase(self.searchQuery, item.name)
      );
    },
    get itemsByQueryIds(): string[] {
      return this.allItemsByQuery.map(item => item.id);
    },
    get totalSearchResult(): IPerson[] {
      return [...this.allItemsByQuery, ...self.searchResult];
    },
    get canFillCurrentFragment(): boolean {
      return (
        !self.pagination.onTheLastPage &&
        !this.haveValidSearch &&
        self.pagination.currentMaxCount < self.totalCount
      );
    }
  }))
  .actions(self => {
    let getListController: AbortController | undefined;
    let searchListController: AbortController | undefined;
    let handleSearchTimeout: number | null = null;

    // total count
    const getTotalCount = flow(function*() {
      const endpoint = "/persons/summary";
      try {
        const response = yield apiRequest({ endpoint });
        if (response && response.ok) {
          const json = yield response.json();
          const data = formatKeys(json.data);
          return data;
        }
      } catch (e) {
        console.error(e);
      }
    });
    const setTotalCount = (count: number) => {
      self.totalCount = count;
    };
    const updateTotalCount = flow(function*() {
      const res = yield getTotalCount();
      if (!res) return;
      setTotalCount(res.totalCount);
    });

    // detail dialog related stuff
    const setSelectedPerson = (id: string) => {
      try {
        self.selectedPerson = (id as unknown) as IPerson;
      } catch (e) {
        console.error(e);
        self.store.ui.addErrorNotification(
          "Congratulations! You got an error I can't reproduce 😫"
        );
      }
    };
    const clearSelectedPerson = () => {
      self.selectedPerson = undefined;
    };
    const showPersonDetails = (id: string) => {
      setSelectedPerson(id);
      self.store.ui.openModal(PERSON_DETAILS_MODAL_ID);
    };
    const hidePeronDetailsDialog = flow(function*(): any {
      yield self.store.ui.closeModal(PERSON_DETAILS_MODAL_ID);
      clearSelectedPerson();
    });

    // change loading states
    const setLoadingListState = (newState: boolean) => {
      self.isLoadingList = newState;
    };
    const setLoadingAdditionalItemsState = (newState: boolean) => {
      self.isLoadingAdditionalItems = newState;
    };

    // list, pagination and cache actions
    const addListCache = (snapshot: IPersonSnapshotIn[]) => {
      const fragment: IListCacheSnapshotIn = {
        content: snapshot,
        pageId: self.pagination.currentPage
      };
      try {
        self.cache.push(fragment);
      } catch (e) {
        console.error(e);
      }
    };
    const setCache = (snapshot: IListCacheSnapshotIn[]) => {
      try {
        applySnapshot(self.cache, snapshot);
      } catch (e) {
        console.error(e);
      }
    };
    const getListData = flow(function*(
      from: number = 0,
      limit: number = self.pagination.limit
    ): any {
      getListController && getListController.abort();
      getListController = AbortController && new AbortController();
      const endpoint = "/persons";
      try {
        const params = { from, limit };
        const response = yield apiRequest({
          endpoint,
          params,
          signal: getListController.signal
        });
        if (response && response.ok) {
          const json = yield response.json();
          return formatKeys(json);
        }
      } catch (e) {
        if (e.code !== 20) {
          // 20 is ok, request was aborted
          console.error(e);
          self.store.ui.addErrorNotification("Unable to load People list");
        }
      }
    });
    const getList = flow(function*(
      from: number = 0,
      limit: number = self.pagination.limit
    ) {
      setLoadingListState(true);
      const listData = yield getListData(from, limit);
      setLoadingListState(false);
      if (!listData) return;
      const { persons, count } = listData;
      setTotalCount(count);
      addListCache(persons);
    });
    const clearNextPages = () => {
      const pagesToSave = self.cache.filter(
        page => page.pageId <= self.pagination.currentPage
      );
      setCache(pagesToSave);
    };
    const clearLastPage = () => {
      const notLastPages = self.cache.filter(
        page => page.pageId !== self.pagination.pagesCount
      );
      setCache(notLastPages);
    };

    // drag and drop

    const sendReorderRequest = (personId: string, newOrder: number) => {
      const endpoint = `/persons/${personId}`;
      const body = { orderingId: newOrder };
      return apiRequest({ endpoint, method: "PUT", body });
    };
    const onDragEnd = (sourceIndex: number, destinationIndex: number) => {
      const list = [...self.list];
      /*
      Code below maybe seems overweight
      Something like
      list.splice(sourceIndex, 1);
      list.splice(destinationIndex, 0, draggableId);
      seems much easier
      But if we need to store order via custom property, we need to be tricky
      And we need to send PUT	/persons/{id} request for each of person in range we changed order
      If send just new order position for one element we can't guarantee net time order will be saved
      Inside the application, I fond a way to edit multiple entries with /persons
      and body like {ids: [303, 304, 305], data: {name: 'Abc'}} but this is impossible to
      pass multiple values related to ids.
      So we can save sort just before we get request limitation (impossible to save correct sort for
      around 100 items, we will get 429 error)
       */
      const minIndex = Math.min(sourceIndex, destinationIndex);
      const maxIndex = Math.max(sourceIndex, destinationIndex);
      const listStart = list.slice(0, minIndex);
      const listEnd = list.slice(maxIndex + 1, list.length);
      let affectedArea: IPerson[] = list.slice(minIndex, maxIndex + 1);
      let prevValidOrderId = (list[minIndex] && list[minIndex].orderingId) || 1;
      if (sourceIndex > destinationIndex) {
        const targetItem = affectedArea.pop();
        if (targetItem) {
          affectedArea = [targetItem, ...affectedArea];
        }
      } else {
        const [targetItem, ...rest] = affectedArea;
        affectedArea = [...rest, targetItem];
      }
      let timeout = 0;
      affectedArea.forEach(item => {
        item.orderingId = prevValidOrderId;
        prevValidOrderId += 1;
        setTimeout(() => {
          sendReorderRequest(item.id, item.orderingId as number);
        }, timeout); // Timeout is for not to get 429 error
        // yeah, terrible solution, in real world we will need to edit multiple entries in one request
        timeout += 60;
      });
      const newList = [...listStart, ...affectedArea, ...listEnd];
      self.currentListFragment && self.currentListFragment.updateList(newList);
    };

    // edit / add / delete person actions

    const changeSinglePersonInList = (
      id: string,
      snapshot: IPersonSnapshotIn
    ) => {
      const person = self.list.find(person => person.id === id);
      if (!person) return;
      try {
        applySnapshot(person, snapshot);
      } catch (e) {
        console.error(e);
      }
    };
    const addSinglePersonToList = (person: IPersonSnapshotIn) => {
      try {
        if (!self.currentListFragment || !person) return;
        const newList = [...self.currentListFragment.content, person];
        applySnapshot(self.currentListFragment.content, newList);
      } catch (e) {
        console.log(e);
      }
    };
    const getSinglePerson = flow(function*() {
      const from = self.pagination.currentStartIndex + self.list.length;
      setLoadingAdditionalItemsState(true);
      const res = yield getListData(from, 1);
      setLoadingAdditionalItemsState(false);
      if (!res) {
        return;
      }
      try {
        addSinglePersonToList(res.persons[0]);
      } catch (e) {
        console.error(e);
      }
    });
    const requestPersonChange = flow(function*({
      id,
      isEdit,
      body
    }: IPersonChangeProps) {
      const method = isEdit ? "PUT" : "POST";
      const endpoint = isEdit ? `/persons/${id}` : "/persons";
      // const renamedBody = renameCustomKeysToApi(body, customKeys);
      const formattedBody = formatKeys(body, false);
      return yield apiRequest({ endpoint, method, body: formattedBody });
    });
    const setEditPersonModel = (isEditMode: boolean) => {
      if (!isEditMode) {
        self.editPerson = {
          orderingId: self.totalCount ? self.totalCount + 1 : undefined
        } as IEditPerson;
        return;
      }
      if (!self.selectedPerson) return;
      const {
        name,
        orderingId,
        groups,
        id,
        assistant,
        organizationInfo
      } = self.selectedPerson;
      const snap: IEditPersonSnapshotIn = {
        isEditMode: true,
        id,
        caption: `Edit person: ${name}`,
        orderingId
      };
      if (organizationInfo && organizationInfo.value) {
        snap.organization = `${organizationInfo.value}`;
      }
      self.editPerson = snap as IEditPerson;
      const values: IEditPersonValues = {
        name,
        groups,
        assistant
      };
      self.editPerson.setValues(values);
      const email = getSnapshot(self.selectedPerson.emails);
      self.editPerson.setEmails(email as IContactValues[]);
      const phone = getSnapshot(self.selectedPerson.phones);
      self.editPerson.setPhones(phone as IContactValues[]);
    };
    const openEditPersonModal = (isEditMode: boolean = false) => {
      setEditPersonModel(isEditMode);
      self.store.ui.openModal(EDIT_PERSON_MODAL_ID);
    };
    const closeEditPersonModal = flow(function*(): any {
      yield self.store.ui.closeModal(EDIT_PERSON_MODAL_ID);
      self.editPerson && destroy(self.editPerson);
    });
    const setPendingDelete = (status: boolean) => {
      self.pendingDelete = status;
    };
    const sendDeletePersonRequest = (personId: string) => {
      const endpoint = `/persons/${personId}`;
      return apiRequest({ endpoint, method: "DELETE" });
    };
    const askForDeleteCurrentPerson = () => {
      if (!self.selectedPerson) return;
      const warning: IWarningModelSnapshotIn = {
        text: `Are you sure you want to delete ${self.selectedPerson.name}?`,
        confirmText: "Yes, proceed",
        confirmAction: WARNING_ACTIONS.DELETE_CURRENT_PERSON
      };
      self.store.ui.showWarningDialog(warning);
    };

    const deleteCurrentPerson = flow(function*(): any {
      if (!self.selectedPerson) return;
      const { id } = self.selectedPerson;
      setPendingDelete(true);
      const res = yield sendDeletePersonRequest(id);
      setPendingDelete(false);
      if (!res) {
        self.store.ui.addErrorNotification("Delete request failed");
        return;
      }
      yield hidePeronDetailsDialog();
      const inSearch =
        self.haveValidSearch && self.searchResult.find(item => item.id === id);
      if (inSearch) {
        const filtered = self.searchResult.filter(item => item.id !== id);
        setSearchResults(filtered);
      } else {
        if (
          self.currentListFragment &&
          self.currentListFragment.content.length
        ) {
          const filtered = self.currentListFragment.content.filter(
            item => item.id !== id
          );
          self.currentListFragment.updateList(filtered);
          if (self.canFillCurrentFragment) {
            getSinglePerson();
          }
          clearNextPages();
        } else {
          self.pagination.goToPrev();
        }
      }
      setTotalCount(self.totalCount - 1);
      self.store.ui.addSuccessNotification("Person was deleted");
    });

    const updateSelectedPerson = flow(function*(body: IPersonRequestBody) {
      if (!self.selectedPerson) return;
      const { id } = self.selectedPerson;
      self.editPerson && self.editPerson.setPendingStatus(true);
      const response = yield requestPersonChange({ id, isEdit: true, body });
      self.editPerson && self.editPerson.setPendingStatus(false);
      if (!response || !response.ok) {
        self.store.ui.addErrorNotification("Update request failed");
        return;
      }
      try {
        const json = yield response.json();
        const data = formatKeys(json);
        changeSinglePersonInList(id, data);
        self.store.ui.addSuccessNotification("Person changed");
        closeEditPersonModal();
      } catch (e) {
        console.error(e);
        self.store.ui.addErrorNotification(
          "An error encountered in updating a person"
        );
      }
    });

    const createNewPerson = flow(function*(body: IPersonRequestBody) {
      self.editPerson && self.editPerson.setPendingStatus(true);
      const response = yield requestPersonChange({ isEdit: false, body });
      self.editPerson && self.editPerson.setPendingStatus(false);
      if (!response || !response.ok) {
        self.store.ui.addErrorNotification("Create person request failed");
        return;
      }
      try {
        const json = yield response.json();
        const data = formatKeys(json);
        if (self.shouldAddToEnd) {
          addSinglePersonToList(data);
          setTotalCount(self.totalCount + 1);
        } else {
          setTotalCount(self.totalCount + 1);
          clearLastPage();
        }
        self.store.ui.addSuccessNotification("Person added");
        closeEditPersonModal();
      } catch (e) {
        console.error(e);
        self.store.ui.addErrorNotification(
          "An error encountered in creating a person"
        );
      }
    });

    // search
    const convertSearchResultToPerson = (
      searchResultObject: any
    ): IPersonSnapshotIn => {
      // TODO: do something
      const { id, name, orgName, picture } = searchResultObject;
      const mapped: IPersonSnapshotIn = {
        id,
        name,
        organizationInfo: orgName
          ? {
              name: orgName
            }
          : undefined,
        pictureId: picture,
        incompleteData: true
      };
      return mapped;
    };
    const setSearchResults = (result: IPersonSnapshotIn[]) => {
      const onlyNewItems = result.filter(
        item => !self.itemsByQueryIds.includes(item.id)
      );
      try {
        applySnapshot(self.searchResult, onlyNewItems);
      } catch (e) {
        console.error(e);
      }
    };
    const sendSearchRequest = flow(function*(): any {
      searchListController && searchListController.abort();
      searchListController = AbortController && new AbortController();
      const endpoint = "/persons/find";
      const params = {
        term: self.searchQuery,
        start: 0,
        limit: 500
      };
      try {
        const response = yield apiRequest({
          endpoint,
          params,
          signal: searchListController.signal
        });
        if (response.ok) {
          const json = yield response.json();
          const { data } = formatKeys(json);
          if (data && Array.isArray(data)) {
            return data.map(convertSearchResultToPerson);
          }
        }
      } catch (e) {
        if (e.code !== 20) {
          // 20 is ok, request was aborted
          console.error(e);
        }
      }
    });
    const setSearchQuery = (query: string) => {
      self.searchQuery = query;
    };
    const clearSearchQuery = () => {
      setSearchQuery("");
      setSearchResults([]);
    };

    // life-cycle hook
    const afterAttach = () => {
      // updateTotalCount(); TODO: DEL
      // TODO: handle case when in empty list added new person, seems like bug there
      getList();
    };

    return {
      getList,
      afterAttach,
      onDragEnd,
      showPersonDetails,
      hidePeronDetailsDialog,
      openEditPersonModal,
      closeEditPersonModal,
      askForDeleteCurrentPerson,
      deleteCurrentPerson,
      updateSelectedPerson,
      createNewPerson,
      clearSearchQuery,
      // to provide debounce via setTimeout, this actions must be a properties of action object and can't be private
      performSearch: flow(function*() {
        setLoadingAdditionalItemsState(true);
        const result = yield sendSearchRequest();
        setLoadingAdditionalItemsState(false);
        result && setSearchResults(result);
      }),
      handleSearchInputChange(e: ChangeEvent<HTMLInputElement>) {
        setSearchQuery(e.target.value);
        if (!self.haveValidSearch) return;
        if (handleSearchTimeout) clearTimeout(handleSearchTimeout);
        handleSearchTimeout = window.setTimeout(() => {
          this.performSearch();
        }, 200);
      }
    };
  });

export interface IPeopleList extends Instance<typeof PeopleList> {}
export interface IPeopleListSnapshotIn extends SnapshotIn<typeof PeopleList> {}
export default PeopleList;
