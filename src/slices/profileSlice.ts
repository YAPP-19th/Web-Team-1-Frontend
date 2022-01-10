import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "@src/store"

export interface AbilityType {
	position: string;
	point: number;
}

interface profileState {
	 userInfo: {
		id : number;
		nickname : string;
		position : string;
		point : number;
		intro : string;
	},
	abilityList: AbilityType[]
}

const initialState: profileState = {
	userInfo : {
		id : -1,
		nickname : "",
		position : "",
		point : 0,
		intro : ""
	},
	abilityList: []
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
			state.userInfo.point = action.payload.point;
		},
		setUserInfoIntro: (state, action) => {
			state.userInfo.intro = action.payload;
		},
		setAbilityList: (state, action) => {
			state.abilityList = action.payload;
		}
	}
})

export const profileSelector = (state: RootState) => state.profile;
export const { setUserInfo, setUserMe, setUserInfoIntro, setAbilityList } = profileSlice.actions;
export default profileSlice.reducer;
