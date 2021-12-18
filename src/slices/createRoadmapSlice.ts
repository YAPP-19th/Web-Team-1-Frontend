import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DropdownListType } from '@src/components/atoms/Dropdown';
import { RootState } from '@src/store';

export interface createRoadmapState {
  title: string;
  position: string;
}

const initialState: createRoadmapState = {
  title: '',
  position: '',
};

export const createRoadmapSlice = createSlice({
  name: 'createRoadmap',
  initialState,
  reducers: {
    setTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
    setDropdown: (state, action: PayloadAction<DropdownListType>) => {
      const { type, value } = action.payload;
      return {
        ...state,
        [type as string]: value,
      };
    },
  },
});

export const createRoadmapSelector = (state: RootState) => state.createRoadmap;
export const { setTitle, setDropdown } = createRoadmapSlice.actions;
export default createRoadmapSlice.reducer;
