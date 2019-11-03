import React, { FC, Fragment } from "react";
import { observer } from "mobx-react";
import {
  DragDropContext,
  Droppable,
  DropResult,
  DroppableProvided,
  DroppableStateSnapshot
} from "react-beautiful-dnd";
import "./listView.scss";
import { getBemClassName } from "../../utils";
import { IPersonDumb } from "../../store/Person";
import LoaderOverlay from "../LoaderOverlay/LoaderOverlay";
import PeopleListItem from "../PeopleListItem/PeopleListItem";
import Button from "../Button/Button";
import Pagination, { IPaginationProps } from "../Pagination/Pagination";
import ToolbarSearch, {
  IToolbarSearchProps
} from "../ToolbarSearch/ToobarSearch";
import Spinner from "../Spinner/Spinner";

interface IProps {
  caption: string;
  isLoadingList?: boolean;
  isLoadingAdditionalItems?: boolean;
  isEmpty?: boolean;
  list: IPersonDumb[];
  onDragEnd: (sourceIndex: number, destinationIndex: number) => void;
  onAddClick: () => void;
  clearWholeList: () => void;
  restoreDefaultData: () => void;
  addLabel: string;
  isSearchMode?: boolean;
}

interface IList {
  list: IPersonDumb[];
}

const List: FC<IList> = observer(({ list }) => {
  const renderItem = (
    {
      name,
      id,
      organization,
      setSelected,
      pictureId,
      searchQuery,
      validSearch
    }: IPersonDumb,
    index: number
  ) => (
    <PeopleListItem
      id={id}
      key={id}
      index={index}
      name={name}
      organization={organization}
      setSelected={setSelected}
      imageUrl={pictureId}
      searchQuery={searchQuery}
      validSearch={validSearch}
    />
  );
  return <Fragment>{list.map(renderItem)}</Fragment>;
});

export const ListView: FC<IProps & IPaginationProps & IToolbarSearchProps> = ({
  caption,
  isLoadingList,
  isLoadingAdditionalItems,
  isEmpty,
  list,
  onDragEnd,
  onAddClick,
  addLabel,
  total,
  pagesCount,
  onPaginationClick,
  currentPage,
  searchQuery,
  onSearchClear,
  onSearchInputChange,
  isSearchMode,
  clearWholeList,
  restoreDefaultData
}) => {
  const handleDragEnd = ({ destination, source }: DropResult) => {
    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    onDragEnd(source.index, destination.index);
  };
  return (
    <main className="view-container">
      <header className="view-header">
        <h2 className="view-caption">{caption}</h2>
      </header>
      <div className="toolbar">
        <div className="toolbar__left">
          <Button primary onClick={onAddClick}>
            {addLabel}
          </Button>
          <ToolbarSearch
            onSearchInputChange={onSearchInputChange}
            onSearchClear={onSearchClear}
            searchQuery={searchQuery}
          />
          <Button disabled={isLoadingList} onClick={clearWholeList}>
            Clear all entries
          </Button>
          <Button disabled={isLoadingList} onClick={restoreDefaultData}>
            Restore defaults
          </Button>
        </div>
        <div className="toolbar__right">
          {!isSearchMode && (
            <Pagination
              total={total}
              onPaginationClick={onPaginationClick}
              currentPage={currentPage}
              pagesCount={pagesCount}
            />
          )}
        </div>
      </div>
      <div className={getBemClassName("view-content", { isEmpty })}>
        {isLoadingList && <LoaderOverlay />}
        {isEmpty && (
          <div className="view-content__empty-message">
            {isSearchMode ? "No items found" : "This list is empty"}
          </div>
        )}
        {!isEmpty && (
          <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="list">
              {(
                provided: DroppableProvided,
                snapshot: DroppableStateSnapshot
              ) => (
                <ul
                  className="view-content__list"
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  <List list={list} />
                  {provided.placeholder}
                  {isLoadingAdditionalItems && (
                    <li className="view-content__list-placeholder">
                      <Spinner small />
                    </li>
                  )}
                </ul>
              )}
            </Droppable>
          </DragDropContext>
        )}
      </div>
    </main>
  );
};

export default ListView;
