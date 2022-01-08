import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@src/store';

export interface RoadmapQuestListType {
  questId: number;
  name: string;
}
export interface createRoadmapState {
  name: string;
  position: string;
  questList: RoadmapQuestListType[];
}

const initialState: createRoadmapState = {
  name: '',
  position: '',
  questList: [],
};

export const createRoadmapSlice = createSlice({
  name: 'createRoadmap',
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setDropdown: (state, action) => {
      const { type, value } = action.payload;
      return {
        ...state,
        [type as string]: value,
      };
    },
    setQuestList: (state, action) => {
      state.questList = action.payload;
    },
  },
});

export const createRoadmapSelector = (state: RootState) => state.createRoadmap;
export const { setName, setDropdown, setQuestList } =
  createRoadmapSlice.actions;
export default createRoadmapSlice.reducer;
