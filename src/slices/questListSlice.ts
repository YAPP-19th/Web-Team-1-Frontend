import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@src/store';

export interface QuestListState {
  position: string;
  page: number;
}

const initialState: QuestListState = {
  position: '',
  page: 0,
};

export const questListSlice = createSlice({
  name: 'questList',
  initialState,
  reducers: {
    setPosition: (state, action: PayloadAction<string>) => {
      state.position = action.payload;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
  },
});

export const questListSelector = (state: RootState) => state.questList;
export const { setPosition, setPage } = questListSlice.actions;
export default questListSlice.reducer;
