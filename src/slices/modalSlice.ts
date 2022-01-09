import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@src/store';

export interface ModalState {
  isModalOn: boolean;
  currentQuestId: number;
}

const initialState: ModalState = {
  isModalOn: false,
  currentQuestId: 0,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setModalOn: (state, action: PayloadAction<number>) => {
      state.isModalOn = true;
      state.currentQuestId = action.payload;
    },
    setModalOff: (state) => {
      state.isModalOn = false;
      state.currentQuestId = 0;
    },
  },
});

export const modalSelector = (state: RootState) => state.modal;
export const { setModalOn, setModalOff } = modalSlice.actions;
export default modalSlice.reducer;
