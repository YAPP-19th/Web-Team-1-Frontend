import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  ProvideQuestId,
  ProvideSubQuestId,
  ProvideRoadmapId,
  ProvideUserId,
  ProvideIntro,
  PostLogin,
  PostRegister,
  PostQuests,
  GetQuests,
  GetUsersQuests,
  GetUsersQuestsParticipation,
  PostUpload,
  PostRoadmaps,
  GetQuestsReviews,
} from './types/request';
import {
  Response,
  Quest,
  Quests,
  QuestsCount,
  QuestsInfo,
  Writer,
  Roadmap,
  RoadmapListItem,
  UsersProfile,
  Auth,
  Upload,
  QuestsPositionsCount,
  QuestsSubquest,
  QuestsReviews,
  QuestResponse,
} from './types/response';

export const giljobApi = createApi({
  reducerPath: 'giljobApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_ENDPOINT,
    prepareHeaders: (headers) => {
      // TODO: 현재 테스트를 위해서 임시 access token을 항상 header에 담아서 request를 하는 중
      // 추후 redux store에 저장된 access token으로 대체해야 함
      headers.set('Authorization', process.env.REACT_APP_API_KEY ?? '');
      // headers.set('Content-Type', 'application/json');
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
    getQuests: builder.query<Response<QuestResponse>, GetQuests>({
      query: ({ keyword, position, size, page }) =>
        `quests?${keyword ? `&keyword=${keyword}` : ''}${
          position ? `&position=${position}` : ''
        }${size ? `&size=${size}` : ''}${page ? `&page=${page}` : ''}`,
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
      query: ({ questId }) => `quests/${questId}/subquests`,
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
      ProvideQuestId & Partial<ProvideQuestId & GetQuestsReviews>
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
    getRoadmapsRecent: builder.query<
      Response<RoadmapListItem[]>,
      Partial<GetQuests>
    >({
      query: ({ size }) => `roadmaps?${size ? `&size=${size}` : ''}`,
    }),
    // 로드맵 등록: POST /roadmaps
    postRoadmaps: builder.mutation<Response<null>, PostRoadmaps>({
      query: (body) => ({
        url: 'roadmaps',
        method: 'POST',
        body,
      }),
    }),
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
    postRegister: builder.mutation<Response<Auth>, PostRegister>({
      query: (body) => ({
        url: 'sign-up',
        method: 'POST',
        body,
      }),
    }),
    // 로그인: POST /sign-in
    postLogin: builder.mutation<Response<Auth>, PostLogin>({
      query: (body) => ({
        url: 'sign-in',
        method: 'POST',
        body,
      }),
    }),
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
    postUpload: builder.mutation<Response<Upload>, PostUpload>({
      query: (body) => ({
        url: 'upload',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const {
  usePostQuestsMutation,
  useGetQuestsQuery,
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
  usePostRoadmapsMutation,
  usePostRoadmapsScrapMutation,
  useGetUsersRoadmapsScrapQuery,
  useGetUsersMeQuery,
  useGetUsersProfileQuery,
  usePatchUsersMeIntroMutation,
  usePostLoginMutation,
  usePostRegisterMutation,
  usePostUploadMutation,
} = giljobApi;
