import { configureStore } from '@reduxjs/toolkit';
import { giljobApi } from '@src/services/giljob';

export const store = configureStore({
  reducer: {
    [giljobApi.reducerPath]: giljobApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(giljobApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
