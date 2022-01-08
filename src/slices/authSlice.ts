import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@src/store';

export interface authState {
  isAuth: boolean;
  kakaoAccessToken: string;
  accessToken: string;
}

const initialState: authState = {
  isAuth: false,
  kakaoAccessToken: '',
  accessToken: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
    setKakaoToken: (state, action: PayloadAction<string>) => {
      state.kakaoAccessToken = action.payload;
    },
    setAccessToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
    },
    resetAuth: () => initialState,
  },
});

export const authSelector = (state: RootState) => state.auth;
export const { setAuth, setKakaoToken, setAccessToken, resetAuth } =
  authSlice.actions;
export default authSlice.reducer;
