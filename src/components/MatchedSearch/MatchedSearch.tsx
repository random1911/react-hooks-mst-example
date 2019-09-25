import React, { FC, Fragment } from "react";
import { searchStringIgnoreCase } from "../../utils";

interface IProps {
  query?: string;
  value: string;
  matchedClassName?: string;
}

const MatchedSearch: FC<IProps> = ({ query, value, matchedClassName }) => {
  if (!query) return <Fragment>{value}</Fragment>;
  const matchedSearch = query && searchStringIgnoreCase(query, value);
  if (matchedSearch) {
    const matchedAt = value.toLowerCase().search(query.toLowerCase());
    const begin = value.slice(0, matchedAt);
    const matched = value.slice(matchedAt, matchedAt + query.length);
    const end = value.slice(matchedAt + matched.length, value.length);
    return (
      <Fragment>
        {begin}
        <span className={matchedClassName}>{matched}</span>
        {end}
      </Fragment>
    );
  }
  return <Fragment>{value}</Fragment>;
};

export default MatchedSearch;
