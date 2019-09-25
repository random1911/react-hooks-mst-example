import React, { ChangeEvent, FC, FormEvent } from "react";
import { TextInput } from "../TextField/TextField";
import "./toolbarSearch.scss";

export interface IToolbarSearchProps {
  searchQuery?: string;
  onSearchInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSearchClear: () => void;
}

export const ToolbarSearch: FC<IToolbarSearchProps> = ({
  searchQuery,
  onSearchInputChange,
  onSearchClear
}) => {
  const handleSubmit = (e: FormEvent) => {
    e && e.preventDefault();
  };
  const handleReset = (e: FormEvent) => {
    e && e.preventDefault();
    onSearchClear();
  };
  return (
    <form onSubmit={handleSubmit} onReset={handleReset} className="search-bar">
      <TextInput
        id="Search"
        value={searchQuery}
        onChange={onSearchInputChange}
        placeholder="Search by name"
      />
      <button type="reset" className="search-bar__clear" title="Clear" />
    </form>
  );
};

export default ToolbarSearch;
