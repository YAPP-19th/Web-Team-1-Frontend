import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  ProvideQuestId,
  ProvideSubQuestId,
  ProvideRoadmapId,
  ProvideUserId,
  ProvideIntro,
  PostQuests,
  GetQuests,
  GetQuestsSearch,
  GetUsersQuests,
  GetUsersQuestsParticipation,
} from './types/request';
import {
  Response,
  Quest,
  QuestsCount,
  QuestsInfo,
  Writer,
  Roadmap,
  RoadmapListItem,
  UsersProfile,
  QuestsPositionsCount,
  QuestsSubquest,
  QuestsReviews,
} from './types/response';

export const giljobApi = createApi({
  reducerPath: 'giljobApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_ENDPOINT,
    prepareHeaders: (headers) => {
      // TODO: 현재 테스트를 위해서 임시 access token을 항상 header에 담아서 request를 하는 중
      // 추후 redux store에 저장된 access token으로 대체해야 함
      headers.set('Authorization', process.env.REACT_APP_API_KEY ?? '');
      headers.set('Content-Type', 'application/json');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    // 퀘스트 등록: POST /quests
    postQuests: builder.mutation<PostQuests, Partial<PostQuests>>({
      query: (body) => ({
        url: 'quests',
        method: 'POST',
        body,
      }),
    }),
    // 전체 퀘스트 리스트 조회: GET /quests
    getQuests: builder.query<Response<Quest[]>, GetQuests | void>({
      query: (argument) =>
        `quests?cursor=${argument?.cursor ?? ''}&size=${argument?.size ?? ''}`,
    }),
    // 퀘스트 검색: GET /quests/search
    getQuestsSearch: builder.query<Response<Quest[]>, GetQuestsSearch>({
      query: ({ keyword, position, cursor, size }) =>
        `quests/search?keyword=${keyword}&position=${position}&size=${size}&cursor=${cursor}`,
    }),
    // 랜딩 페이지 퀘스트 수 조회: GET /quests/count
    getQuestsCount: builder.query<Response<QuestsCount>, void>({
      query: () => `quests/count`,
    }),
    // 포지션 별 퀘스트 수 조회: GET /quests/positions/count
    getQuestsPositionsCount: builder.query<
      Response<QuestsPositionsCount[]>,
      void
    >({
      query: () => `quests/positions/count`,
    }),
    // 퀘스트 상세 페이지 정보 조회: GET /quests/{questId}/info/
    getQuestsInfo: builder.query<Response<QuestsInfo>, ProvideQuestId>({
      query: ({ questId }) => `quests/${questId}/info`,
    }),
    // 로그인한 유저에 대한 퀘스트의 상태 정보 조회: GET /quests/{questId}/participation/status
    getQuestsParticipationStatus: builder.query<
      Response<string>,
      ProvideQuestId
    >({
      query: ({ questId }) => `quests/${questId}/participation/status`,
    }),
    // 퀘스트의 서브 퀘스트 진행 현황 조회: GET /quests/{questId}/subquest
    getQuestsSubquest: builder.query<Response<QuestsSubquest>, ProvideQuestId>({
      query: ({ questId }) => `quests/${questId}/subquest`,
    }),
    // 퀘스트 참여: POST /quests/{questId}/participation
    // TODO
    // 퀘스트 완료: PATCH /quests/{questId}/complete
    // TODO
    // 퀘스트 한줄 후기 작성: POST /quests/{questId}/review
    // TODO
    // 퀘스트 한줄 후기 리스트 조회: GET /quests/{questId}/reviews
    getQuestsReviews: builder.query<
      Response<QuestsReviews>,
      ProvideQuestId & Partial<GetQuests>
    >({
      query: ({ questId, cursor, size }) =>
        `quests/${questId}/reviews${size ? `&size=${size}` : ''}${
          cursor ? `&cursor=${cursor}` : ''
        }`,
    }),
    // 유저가 생성한 퀘스트 리스트 조회: GET /users/{userId}/quests
    getUsersQuests: builder.query<Response<Quest[]>, GetUsersQuests>({
      query: ({ userId, cursor, size }) =>
        `users/${userId}/quests?cursor=${cursor ?? ''}&size=${size ?? ''}`,
    }),
    // 유저가 참여한 퀘스트 리스트 조회: GET /users/{userId}/quests/participation
    getUsersQuestsParticipation: builder.query<
      Response<Quest[]>,
      GetUsersQuestsParticipation
    >({
      query: ({ userId, cursor, size, completed }) =>
        `users/${userId}/quests/participation?cursor=${
          cursor ?? ''
        }&completed=${completed ? 'true' : 'false'}&size=${size ?? ''}`,
    }),
    // 서브퀘스트 완료: POST /subquests/{subQuestId}/complete
    postSubquestsComplete: builder.mutation<
      ProvideSubQuestId,
      Partial<ProvideSubQuestId>
    >({
      query: ({ subQuestId }) => ({
        url: `subquests/${subQuestId}/complete`,
        method: 'POST',
      }),
    }),
    // 서브퀘스트 취소: PATCH /subquests/{subQuestId}/cancel
    postSubquestsCancel: builder.mutation<
      ProvideSubQuestId,
      Partial<ProvideSubQuestId>
    >({
      query: ({ subQuestId }) => ({
        url: `subquests/${subQuestId}/cancel`,
        method: 'PATCH',
      }),
    }),
    // 로드맵 조회: GET /roadmaps/{roadmapId}
    getRoadmaps: builder.query<Response<Roadmap>, ProvideRoadmapId>({
      query: ({ roadmapId }) => `roadmaps/${roadmapId}`,
    }),
    // 최근 등록한 로드맵 리스트 조회: GET /roadmaps
    getRoadmapsRecent: builder.query<Response<Roadmap>, Partial<GetQuests>>({
      query: ({ size }) => `roadmaps?${size ? `&size=${size}` : ''}`,
    }),
    // 로드맵 등록: POST /roadmaps
    // TODO
    // 로드맵 삭제: DELETE /roadmaps/{roadmapId}
    // TODO
    // 로드맵 스크랩: POST /roadmaps/{roadmapId}/scrap
    postRoadmapsScrap: builder.mutation<
      ProvideRoadmapId,
      Partial<ProvideRoadmapId>
    >({
      query: ({ roadmapId }) => ({
        url: `roadmaps/${roadmapId}/scrap`,
        method: 'POST',
      }),
    }),
    // 유저가 스크랩한 로드맵 리스트 조회: GET /users/{userId}/roadmaps/scrap
    getUsersRoadmapsScrap: builder.query<
      Response<RoadmapListItem[]>,
      ProvideUserId
    >({
      query: ({ userId }) => `users/${userId}/roadmaps/scrap`,
    }),
    // 유저가 등록한 로드맵 리스트 조회: GET /users/{userId}/roadmaps
    // TODO
    // 회원가입: POST /sign-up
    // TODO
    // 로그인: POST /sign-in
    // TODO
    // 인증된 유저 정보 조회: GET /users/me
    getUsersMe: builder.query<Response<Writer>, void>({
      query: () => `users/me`,
    }),
    getUsersProfile: builder.query<Response<UsersProfile>, ProvideUserId>({
      query: ({ userId }) => `users/${userId}/profile`,
    }),
    // 유저 정보 수정: PATCH /users/me
    // TODO: 500 Error
    // 유저 프로필 조회: GET /users/{userId}/profile
    // TODO
    // 유저 정보 수정: PATCH /users/me
    // TODO
    // 유저 자기소개 수정: PATCH /users/me/intro
    patchUsersMeIntro: builder.mutation<ProvideIntro, Partial<ProvideIntro>>({
      query: (body) => ({
        url: `users/me/intro`,
        method: 'PATCH',
        body,
      }),
    }),
    // 업로드: POST /upload
    // TODO
  }),
});

export const {
  usePostQuestsMutation,
  useGetQuestsQuery,
  useGetQuestsSearchQuery,
  useGetQuestsCountQuery,
  useGetQuestsPositionsCountQuery,
  useGetQuestsInfoQuery,
  useGetQuestsParticipationStatusQuery,
  useGetQuestsSubquestQuery,
  useGetQuestsReviewsQuery,
  useGetUsersQuestsQuery,
  useGetUsersQuestsParticipationQuery,
  usePostSubquestsCompleteMutation,
  usePostSubquestsCancelMutation,
  useGetRoadmapsQuery,
  useGetRoadmapsRecentQuery,
  usePostRoadmapsScrapMutation,
  useGetUsersRoadmapsScrapQuery,
  useGetUsersMeQuery,
  useGetUsersProfileQuery,
  usePatchUsersMeIntroMutation,
} = giljobApi;
