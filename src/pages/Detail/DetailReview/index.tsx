import React, { useCallback, useState } from 'react';
import { Input, Pagination, Text } from '@src/components/atoms';
import './style.scss';
import { Author } from '@src/components/molecules';
import {
  useGetQuestsReviewsQuery,
  usePatchQuestsReviewMutation,
} from '@src/services/giljob';

export interface DetailReviewProps {
  questId: number;
}

const DetailReview: React.FC<DetailReviewProps> = ({ questId }) => {
  const [page, setPage] = useState(0);
  const [patchQuestsReview] = usePatchQuestsReviewMutation();
  const { data: reviewInfo } = useGetQuestsReviewsQuery({
    questId,
    page,
    size: 5,
  });
  const parseDate = useCallback((reviewCreatedAt: string) => {
    const reviewDate = new Date(reviewCreatedAt);
    return `${reviewDate.getFullYear()}.${(reviewDate.getMonth() + 1)
      .toString()
      .padStart(2, '0')}.${reviewDate.getDate().toString().padStart(2, '0')}`;
  }, []);

  const handleSubmit = useCallback(
    (review: string) => {
      patchQuestsReview({ questId, review });
    },
    [patchQuestsReview, questId],
  );

  return (
    <section className="quest-detail-review">
      <div className="review-title-wrapper">
        <Text
          className="review-title"
          fontColor="main"
          fontSize="xxx-large"
          fontWeight="bold"
        >
          한 줄 후기
        </Text>
        <Text fontColor="gray" fontSize="small" fontWeight="medium">
          {reviewInfo?.data.totalCount ?? 0}개
        </Text>
      </div>
      <div className="detail-review-wrapper">
        {reviewInfo?.data.contentList.map((review, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <div className="each-review-wrapper" key={index}>
            <div className="review-author-wrapper">
              <Author
                authorName={review.reviewWriter.nickname}
                iconSize="small"
                // TODO: iconLevel과 point 간의 관계 로직 추가 필요
                // iconLevel={1}
                iconLevel={
                  (Math.floor(review.reviewWriter.point / 100) + 1) as
                    | 1
                    | 2
                    | 3
                    | 4
                    | 5
                }
              />
              <Text fontColor="gray" fontSize="small" fontWeight="medium">
                |&nbsp;&nbsp;{parseDate(review.reviewCreatedAt)}
              </Text>
            </div>
            <Text fontColor="main" fontSize="medium" fontWeight="regular">
              {review.review}
            </Text>
          </div>
        ))}
      </div>
      <Pagination
        className="detail-review-pagination"
        pageSize={5}
        totalLength={reviewInfo?.data.totalCount ?? 0}
        currentPage={page}
        onDispatch={setPage}
      />
      <Input
        className="detail-review-input"
        count={100}
        inputHeight="wide"
        placeholder="후기를 남겨주세요 (최대 100자)"
        placeholderColor="gray"
        onSubmit={handleSubmit}
      />
    </section>
  );
};

export default DetailReview;
