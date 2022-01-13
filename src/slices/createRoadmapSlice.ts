import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@src/store';

export interface RoadmapQuestListType {
  id: number;
  questId: number;
  name: string;
  isRealQuest: boolean;
}
export interface createRoadmapState {
  name: string;
  position: string;
  questList: RoadmapQuestListType[];
  questListId: number;
}

const initialState: createRoadmapState = {
  name: '',
  position: '',
  questList: [],
  questListId: 0,
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
    resetCreateRoadmap: () => initialState,
  },
});

export const createRoadmapSelector = (state: RootState) => state.createRoadmap;
export const { setName, setDropdown, setQuestList, resetCreateRoadmap } =
  createRoadmapSlice.actions;
export default createRoadmapSlice.reducer;
