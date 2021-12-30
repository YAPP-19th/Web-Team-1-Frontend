import { configureStore } from '@reduxjs/toolkit';
import createQusetReducer from '@src/slices/createQuestSlice';
import createRoadmapReducer from '@src/slices/createRoadmapSlice';
import { giljobApi } from '@src/services/giljob';
import profileReducer from '@src/slices/profileSlice';

export const store = configureStore({
  reducer: {
    createQuest: createQusetReducer,
    createRoadmap: createRoadmapReducer,
    profile: profileReducer,
    [giljobApi.reducerPath]: giljobApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(giljobApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
