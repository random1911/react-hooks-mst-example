import { types, Instance, SnapshotIn, getParent } from "mobx-state-tree";
import { IPeopleList } from "./PeopleList";

export const DEFAULT_LIMIT = 10;

const Pagination = types
  .model("PaginationModel", {
    limit: DEFAULT_LIMIT,
    currentPage: 1
  })
  .views(self => ({
    get peopleList(): IPeopleList {
      return getParent(self, 1);
    },
    get total(): number {
      return this.peopleList.totalCount;
    },
    get pagesCount(): number {
      return Math.ceil(this.total / self.limit);
    },
    get currentStartIndex(): number {
      return (self.currentPage - 1) * self.limit;
    },
    get onTheFirstPage(): boolean {
      return self.currentPage === 0;
    },
    get onTheLastPage(): boolean {
      return self.currentPage === this.pagesCount;
    },
    get currentMaxCount(): number {
      return self.currentPage * self.limit;
    }
  }))
  .actions(self => {
    const setCurrentPage = (pageId: number) => {
      self.currentPage = pageId;
    };
    const goToPage = (pageId: number) => {
      setCurrentPage(pageId);
      const start = (pageId - 1) * self.limit;
      const inCache = self.peopleList.getFromCache(pageId);
      if (!inCache) {
        self.peopleList.getList(start);
      }
    };
    // for the case we've deleted last item on the page
    const goToPrev = () => {
      const prev = self.currentPage - 1;
      if (prev < 1) return;
      goToPage(prev);
    };
    return {
      goToPage,
      goToPrev
    };
  });

export interface IPagination extends Instance<typeof Pagination> {}
export interface IPaginationSnapshotIn extends SnapshotIn<typeof Pagination> {}
export default Pagination;
