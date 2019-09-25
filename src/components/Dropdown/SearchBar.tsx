import React, { FC, ChangeEvent } from "react";
import "./dropdown.scss";

interface IProps {
  value?: string;
  onClear?: () => void;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onInputFocus: () => void;
  onInputBlur: () => void;
}

const SearchBar: FC<IProps> = ({
  value,
  onChange,
  onClear,
  onInputFocus,
  onInputBlur
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e);
  };
  const handleClear = () => {
    onClear && onClear();
  };
  return (
    <div className="dropdown-search">
      <input
        className="dropdown-search__input"
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Search"
        onFocus={onInputFocus}
        onBlur={onInputBlur}
      />
      {value && (
        <button
          className="dropdown-search__clear"
          type="button"
          onClick={handleClear}
          title="Clear"
        />
      )}
    </div>
  );
};

export default SearchBar;
