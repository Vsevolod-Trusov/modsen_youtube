import { createSlice } from '@reduxjs/toolkit';

import { SLICE_NAMES } from '@/contants';
import { RootState } from '@/store';

interface IElastic {
  storage: any;
}

const initials: IElastic = {
  storage: {},
};

const elastic = createSlice({
  name: SLICE_NAMES.ELASTIC,
  initialState: initials,
  reducers: {
    saveSearchResult: (state, { payload }) => {
      return {
        storage: { ...state.storage, ...{ [payload.key]: payload.result } },
      };
    },
  },
});

export const { saveSearchResult } = elastic.actions;

export const getStorage = (state: RootState) => state.elastic.storage;

export default elastic.reducer;
