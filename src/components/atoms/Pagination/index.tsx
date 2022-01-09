import React, { useMemo } from 'react';
import cn from 'classnames';
import './style.scss';
import { Text } from '@src/components/atoms';

export interface PaginationProps {
  pageSize: number; // 한 페이지에 표시될 데이터의 개수
  currentId: number; // 현재 참조 중인 데이터의 index
  totalLength: number; // 모든 데이터의 개수
  onDispatch?: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  pageSize,
  currentId,
  totalLength,
  onDispatch,
}) => {
  // TODO: page를 클릭했을 때, 서버로부터 데이터 요청해서 리렌더링
  const totalPage = useMemo<number>(
    () => Math.ceil(totalLength / pageSize),
    [totalLength, pageSize],
  );

  const handleChange = (page: number) => {
    if (onDispatch) {
      onDispatch(page);
    }
  };

  return (
    <div className={cn(`_PAGINATION_`)}>
      {[...Array(totalPage)].map((_, index) => (
        // TODO: 클릭한 page에 대하여 별도의 스타일 적용
        <div
          className="pagination-number-wrapper"
          key={index}
          onClick={() => handleChange(index)}
        >
          <Text
            className={cn(`pagination-number`)}
            fontColor={index === currentId ? 'gil-blue' : 'gray'}
            fontSize="medium"
            fontWeight="regular"
            // eslint-disable-next-line react/no-array-index-key
            key={index}
          >
            {index + 1}
          </Text>
        </div>
      ))}
    </div>
  );
};

export default Pagination;
