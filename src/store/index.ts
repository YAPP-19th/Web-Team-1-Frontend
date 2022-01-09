import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createQuestReducer from '@src/slices/createQuestSlice';
import createRoadmapReducer from '@src/slices/createRoadmapSlice';
import registerReducer from '@src/slices/registerSlice';
import authReducer from '@src/slices/authSlice';
import questListReducer from '@src/slices/questListSlice';
import modalReducer from '@src/slices/modalSlice';
import { giljobApi } from '@src/services/giljob';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'], // auth Reducer를 Local Storage에 저장합니다.
};

export const store = configureStore({
  reducer: persistReducer(
    persistConfig,
    combineReducers({
      auth: authReducer,
      register: registerReducer,
      createQuest: createQuestReducer,
      createRoadmap: createRoadmapReducer,
      questList: questListReducer,
      modal: modalReducer,
      [giljobApi.reducerPath]: giljobApi.reducer,
    }),
  ),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(giljobApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
