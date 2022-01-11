import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@src/store';

export interface modalState {
  isModalOn: boolean;
}

const initialState: modalState = {
  isModalOn: false,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setModalOn: (state) => {
      state.isModalOn = true;
    },
    setModalOff: (state) => {
      state.isModalOn = false;
    },
  },
});

export const modalSelector = (state: RootState) => state.modal;
export const { setModalOn, setModalOff } = modalSlice.actions;
export default modalSlice.reducer;
