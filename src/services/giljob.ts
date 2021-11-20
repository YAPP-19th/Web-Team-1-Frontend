import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Count } from '@src/pages/Landing/Count';

export const giljobApi = createApi({
  reducerPath: 'giljobApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://localhost/' }),
  endpoints: (builder) => ({
    getQuestsCount: builder.query<Count, string>({
      query: () => `api/quests/count`,
    }),
  }),
});

export const { useGetQuestsCountQuery } = giljobApi;
