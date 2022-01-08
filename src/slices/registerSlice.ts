import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DropdownListType } from '@src/components/atoms/Dropdown';
import { RootState } from '@src/store';

export interface registerState {
  position: string;
  nickname: string;
  intro: string;
}

const initialState: registerState = {
  nickname: '',
  position: '',
  intro: '',
};

export const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    setNickname: (state, action: PayloadAction<string>) => {
      state.nickname = action.payload;
    },
    setPosition: (state, action: PayloadAction<DropdownListType>) => {
      const { type, value } = action.payload;
      return {
        ...state,
        [type as string]: value,
      };
    },
    setIntro: (state, action: PayloadAction<string>) => {
      state.intro = action.payload;
    },
    resetRegister: () => initialState,
  },
});

export const registerSelector = (state: RootState) => state.register;
export const { setPosition, setNickname, setIntro, resetRegister } =
  registerSlice.actions;
export default registerSlice.reducer;
