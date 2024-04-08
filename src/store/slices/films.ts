import { createSlice } from '@reduxjs/toolkit';

import { EMPTY_STRING, SLICE_NAMES } from '@/contants';
import { RootState } from '@/store';
import { IFilter } from '@/types';

const initials: IFilter = {
  films: [],
  isLoading: true,
  category: EMPTY_STRING,
  searchValue: EMPTY_STRING,
};

const films = createSlice({
  name: SLICE_NAMES.FILMS,
  initialState: initials,
  reducers: {
    setCategory: (state, { payload }) => {
      return { ...state, category: payload };
    },
    setfilms: (state, { payload }) => {
      return { ...state, films: payload };
    },
    setSearchValue: (state, { payload }) => {
      return { ...state, searchValue: payload };
    },
    setIsLoading: (state, { payload }) => {
      return { ...state, isLoading: payload };
    },
  },
});

export const { setCategory, setfilms, setIsLoading, setSearchValue } =
  films.actions;

export const getCategory = (state: RootState) => state.films.category;
export const getFilms = (state: RootState) => state.films.films;
export const getIsLoading = (state: RootState) => state.films.isLoading;
export const getSearchValue = (state: RootState) => state.films.searchValue;

export default films.reducer;
