import { createSlice } from '@reduxjs/toolkit';

import { SLICE_NAMES } from '@/contants';
import { RootState } from '@/store';
import { IElastic } from '@/types';

const initials: IElastic = {
  storage: [],
  selectedFilmsStorage: [],
};

const elastic = createSlice({
  name: SLICE_NAMES.ELASTIC,
  initialState: initials,
  reducers: {
    saveSearchResult: (state, { payload }) => {
      return {
        ...state,
        storage: [
          ...state.storage,
          { key: payload.key, value: payload.result },
        ],
      };
    },
    saveSelectedFilm: (state, { payload }) => {
      return {
        ...state,
        selectedFilmsStorage: [
          ...state.selectedFilmsStorage,
          { key: payload.key, value: payload.result },
        ],
      };
    },
  },
});

export const { saveSearchResult, saveSelectedFilm } = elastic.actions;

export const getStorage = (state: RootState) => state.elastic;

export default elastic.reducer;
