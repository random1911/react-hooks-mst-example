import React, { FC } from "react";
import { observer } from "mobx-react";
import ListView from "./ListView";
import { useStore } from "../../store/storeContext";

const PeopleListView: FC = () => {
  const { peopleList } = useStore();
  const {
    isLoadingList,
    isLoadingAdditionalItems,
    caption,
    isEmpty,
    list,
    onDragEnd,
    addLabel,
    openEditPersonModal,
    pagination,
    searchQuery,
    handleSearchInputChange,
    clearSearchQuery,
    haveValidSearch,
    clearWholeList,
    restoreDefaultData
  } = peopleList;
  const { total, goToPage, pagesCount, currentPage } = pagination;
  return (
    <ListView
      isSearchMode={haveValidSearch}
      caption={caption}
      isLoadingList={isLoadingList}
      isLoadingAdditionalItems={isLoadingAdditionalItems}
      isEmpty={isEmpty}
      list={list}
      onDragEnd={onDragEnd}
      onAddClick={openEditPersonModal}
      addLabel={addLabel}
      total={total}
      onPaginationClick={goToPage}
      currentPage={currentPage}
      pagesCount={pagesCount}
      searchQuery={searchQuery}
      onSearchInputChange={handleSearchInputChange}
      onSearchClear={clearSearchQuery}
      clearWholeList={clearWholeList}
      restoreDefaultData={restoreDefaultData}
    />
  );
};

export default observer(PeopleListView);
