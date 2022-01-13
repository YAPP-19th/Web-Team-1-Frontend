import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@src/store';

export interface ReviewListState {
  questId: number;
  page: number;
}

const initialState: ReviewListState = {
  questId: 0,
  page: 0,
};

export const reviewListSlice = createSlice({
  name: 'reviewList',
  initialState,
  reducers: {
    setQuestId: (state, action: PayloadAction<number>) => {
      state.questId = action.payload;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
  },
});

export const reviewListSelector = (state: RootState) => state.reviewList;
export const { setQuestId, setPage } = reviewListSlice.actions;
export default reviewListSlice.reducer;
