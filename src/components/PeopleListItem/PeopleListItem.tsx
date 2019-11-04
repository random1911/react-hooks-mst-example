import React, { FC, SyntheticEvent } from "react";
import { observer } from "mobx-react";
import {
  Draggable,
  DraggableProvided,
  DraggableStateSnapshot
} from "react-beautiful-dnd";
import "./peoplelistItem.scss";
import { getBemClassName } from "../../utils";
import Avatar from "../Avatar/Avatar";
import MatchedSearch from "../MatchedSearch/MatchedSearch";

export interface IPeopleListItem {
  id: string;
  index: number;
  name: string;
  imageUrl?: string;
  organization?: string;
  setSelected: () => void;
  searchQuery?: string;
  validSearch?: boolean;
}

const PeopleListItem: FC<IPeopleListItem> = ({
  id,
  index,
  name,
  imageUrl,
  organization,
  setSelected,
  searchQuery,
  validSearch
}) => {
  const handleClick = (e: SyntheticEvent) => {
    e && e.preventDefault();
    setSelected();
  };
  const handleSpacePress = (e: KeyboardEvent) => {
    if (e.code === "Space") {
      e && e.preventDefault();
      setSelected();
    }
  };
  const onFocus = () => {
    document.addEventListener("keypress", handleSpacePress);
  };
  const onBlur = () => {
    document.removeEventListener("keypress", handleSpacePress);
  };
  const query = validSearch ? searchQuery : "";
  return (
    <Draggable key={id} draggableId={`${id}`} index={index}>
      {(provided: DraggableProvided, snapshot: DraggableStateSnapshot) => {
        const { isDragging } = snapshot;
        return (
          <li
            className={getBemClassName("people-list-item", { isDragging })}
            ref={provided.innerRef}
            {...provided.draggableProps}
          >
            <div
              className={getBemClassName("people-list-item__drag", {
                isHidden: validSearch
              })}
              {...provided.dragHandleProps}
            />
            <a
              href={`#${id}`}
              onClick={handleClick}
              onFocus={onFocus}
              onBlur={onBlur}
              role="button"
              className={getBemClassName("people-list-item__button", {
                isOnly: validSearch
              })}
            >
              <div className="people-list-item__left">
                <p className="people-list-item-name">
                  <MatchedSearch
                    value={name}
                    query={query}
                    matchedClassName="people-list-item-name__matched-search"
                  />
                </p>
                {organization && (
                  <p className="people-list-item-org">{organization}</p>
                )}
              </div>
              <div className="people-list-item__right">
                <Avatar name={name} imageUrl={imageUrl} />
              </div>
            </a>
          </li>
        );
      }}
    </Draggable>
  );
};

export default observer(PeopleListItem);
