import React, { FC } from "react";
import PaginationButton from "./PaginationButton";
import "./pagination.scss";

export interface IPaginationProps {
  total: number;
  pagesCount: number;
  currentPage: number;
  onPaginationClick: (pageID: number) => void;
}

const Pagination: FC<IPaginationProps> = ({
  total,
  pagesCount,
  onPaginationClick,
  currentPage
}) => {
  const prevDisabled = currentPage < 2;
  const nextDisabled = currentPage >= pagesCount;
  const pages: number[] = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  const renderItem = (pageId: number) => {
    return (
      <PaginationButton
        key={pageId}
        pageId={pageId}
        onClick={onPaginationClick}
        text={`${pageId}`}
        isActive={pageId === currentPage}
      />
    );
  };
  return (
    <div className="pagination">
      <ul className="pagination__list">
        <PaginationButton
          text="Prev"
          isPrev
          onClick={onPaginationClick}
          pageId={currentPage - 1}
          disabled={prevDisabled}
        />
        {pages.map(renderItem)}
        <PaginationButton
          text="Next"
          isNext
          onClick={onPaginationClick}
          pageId={currentPage + 1}
          disabled={nextDisabled}
        />
      </ul>
      <p className="pagination__total">Total: {total}</p>
    </div>
  );
};

export default Pagination;
