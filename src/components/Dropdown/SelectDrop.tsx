import React, { FC, SyntheticEvent, useState } from "react";
import { searchStringIgnoreCase } from "../../utils";
import { IOption } from "./Dropdown";
import SelectOption, { NotFoundOption } from "./SelectOption";
import SearchBar from "./SearchBar";

interface IProps {
  options?: IOption[];
  closeCallback?: () => void;
  onSelect?: (value: number | string) => void;
  selected?: string | number;
  allowSearch?: boolean;
}

const SelectDrop: FC<IProps> = ({
  closeCallback,
  options = [],
  onSelect,
  selected,
  allowSearch
}) => {
  const [query, setQuery] = useState("");
  const [isSearchInFocus, setSearchFocusState] = useState(false);
  const handleSearchFocus = () => {
    setSearchFocusState(true);
  };
  const handleSearchBlur = () => {
    setSearchFocusState(false);
  };
  const onInput = (e: SyntheticEvent) => {
    const { value } = e.target as HTMLInputElement;
    setQuery(value);
  };
  const clear = () => setQuery("");
  const queryComplete = query.length > 2;
  const filteredOptions = !queryComplete
    ? options
    : options.filter(option =>
        searchStringIgnoreCase(query, option.label || "")
      );
  const nothingFound = queryComplete && !filteredOptions.length;
  const renderItems = (item: IOption) => {
    const { label, disabled, value } = item;
    const handleClick = () => {
      onSelect && typeof value !== "undefined" && onSelect(value);
      closeCallback && closeCallback();
    };
    const isSelected = value === selected;
    return (
      <SelectOption
        search={queryComplete ? query : undefined}
        key={value}
        onClick={handleClick}
        value={value}
        label={label}
        isSelected={isSelected}
        disabled={disabled}
        shouldAutofocus={!isSearchInFocus}
      />
    );
  };
  return (
    <div className="dropdown-select">
      {allowSearch && (
        <SearchBar
          onClear={clear}
          onChange={onInput}
          value={query}
          onInputFocus={handleSearchFocus}
          onInputBlur={handleSearchBlur}
        />
      )}
      <ul className="dropdown-select__list">
        {filteredOptions && filteredOptions.map(renderItems)}
        {nothingFound && <NotFoundOption />}
      </ul>
    </div>
  );
};

export default SelectDrop;
