import React, { useCallback, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import cn from 'classnames';
import './style.scss';
import { Text } from '@src/components/atoms';
import { setPage } from '@src/slices/questListSlice';

export interface PaginationProps {
  pageSize: number; // 한 페이지에 표시될 데이터의 개수
  totalLength: number; // 모든 데이터의 개수
  currentPage: number; // 현재 클릭된 page
}

const Pagination: React.FC<PaginationProps> = ({
  pageSize,
  totalLength,
  currentPage,
}) => {
  const dispatch = useDispatch();
  const handleClick = useCallback(
    ({ target }) => {
      dispatch(setPage(parseInt(target.innerText, 10) - 1));
    },
    [dispatch],
  );

  const totalPage = useMemo<number>(
    () => Math.ceil(totalLength / pageSize),
    [totalLength, pageSize],
  );
  return (
    <div className={cn(`_PAGINATION_`)}>
      {[...Array(totalPage)].map((_, index) => (
        <Text
          className={cn(
            `pagination-number`,
            index === currentPage ? 'clicked' : '',
          )}
          fontColor="gray"
          fontSize="medium"
          fontWeight="regular"
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          handleClick={handleClick}
        >
          {index + 1}
        </Text>
      ))}
    </div>
  );
};

export default Pagination;
