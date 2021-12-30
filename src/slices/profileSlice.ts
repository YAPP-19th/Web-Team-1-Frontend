import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "@src/store"

interface profileState {
	 userInfo: {
		id : number;
		nickname : string;
		position : string;
		point : number;
		intro : string;
	}
}

const initialState: profileState = {
	userInfo : {
		// TODO: id 초기값 변경하기
		id : 1,
		nickname : "",
		position : "",
		point : 0,
		intro : ""
	}
}

export const profileSlice = createSlice({
	name: 'profile',
	initialState,
	reducers: {
		setUserInfo: (state, action) => {
			state.userInfo = action.payload;
		},
		setUserMe: (state, action) => {
			state.userInfo.nickname = action.payload.nickname;
			state.userInfo.position = action.payload.position;
		},
		setUserInfoIntro: (state, action) => {
			state.userInfo.intro = action.payload;
		}
	}
})

export const profileSelector = (state: RootState) => state.profile;
export const { setUserInfo, setUserMe, setUserInfoIntro } = profileSlice.actions;
export default profileSlice.reducer;
