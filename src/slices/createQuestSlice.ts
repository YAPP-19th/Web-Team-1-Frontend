import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DropdownListType } from '@src/components/atoms/Dropdown';
import { RootState } from '@src/store';

export interface ListType {
  id: number;
  name: string;
}

export interface createQuestState {
  name: string;
  position: string;
  difficulty: number;
  detail: string;
  thumbnail?: string;
  subQuestList: ListType[];
  tagList: Pick<ListType, 'name'>[];
}

// giljob api 문서에 나와있는 형식으로 redux에 저장했습니다.
const initialState: createQuestState = {
  name: '',
  position: '',
  difficulty: 0,
  detail: '',
  thumbnail: '',
  subQuestList: [],
  tagList: [],
};

export const createQuestSlice = createSlice({
  name: 'createQuest',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setDropdown: (state, action: PayloadAction<DropdownListType>) => {
      const { type, value } = action.payload;

      return {
        ...state,
        [type as string]:
          type === 'difficulty' ? ((value as number) - 10) / 5 : value,
      };
    },
    setDetail: (state, action: PayloadAction<string>) => {
      state.detail = action.payload;
    },
    setThumbnail: (state, action: PayloadAction<string>) => {
      state.thumbnail = action.payload;
    },
    setSubQuest: (state, action: PayloadAction<ListType[]>) => {
      state.subQuestList = action.payload;
    },
    setTag: (state, action: PayloadAction<string[]>) => {
      const parsedData = action.payload.map((value) => ({
        name: value,
      }));
      state.tagList = parsedData;
    },
    resetCreateQuest: () => initialState,
  },
});

export const createQuestSelector = (state: RootState) => state.createQuest;
export const {
  setName,
  setDropdown,
  setDetail,
  setThumbnail,
  setSubQuest,
  setTag,
  resetCreateQuest,
} = createQuestSlice.actions;
export default createQuestSlice.reducer;
