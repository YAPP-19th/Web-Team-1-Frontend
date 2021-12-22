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
  User,
  UsersProfile,
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
    // 퀘스트 참여: POST /quests/{questId}/participation
    // TODO
    // 퀘스트 완료: PATCH /quests/{questId}/complete
    // TODO
    // 퀘스트 한줄 후기 작성: POST /quests/{questId}/review
    // TODO
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
    // 서브퀘스트 완료: POST /subquests/{subQuestId}
    postSubquests: builder.mutation<
      ProvideSubQuestId,
      Partial<ProvideSubQuestId>
    >({
      query: ({ subQuestId }) => ({
        url: `subquests/${subQuestId}`,
        method: 'POST',
      }),
    }),
    // 로드맵 조회: GET /roadmaps/{roadmapId}
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
    // 회원가입: POST /sign-up
    // TODO
    // 로그인: POST /sign-in
    // TODO
    // 인증된 유저 정보 조회: GET /users/me
    getUsersMe: builder.query<Response<User>, void>({
      query: () => `users/me`,
    }),
    getUsersProfile: builder.query<Response<UsersProfile>, ProvideUserId>({
      query: ({ userId }) => `users/${userId}/profile`,
    }),
    // 유저 정보 수정: PATCH /users/me
    // TODO: 500 Error
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
  useGetQuestsInfoQuery,
  useGetUsersQuestsQuery,
  useGetUsersQuestsParticipationQuery,
  usePostSubquestsMutation,
  usePostRoadmapsScrapMutation,
  useGetUsersMeQuery,
  useGetUsersProfileQuery,
  usePatchUsersMeIntroMutation,
} = giljobApi;
