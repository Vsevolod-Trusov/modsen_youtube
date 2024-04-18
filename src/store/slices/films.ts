import { createSlice } from '@reduxjs/toolkit';

import { EMPTY_STRING, SLICE_NAMES } from '@/constants';
import { RootState } from '@/store';
import { IFilmStore } from '@/types';

const initials: IFilmStore = {
  films: [],
  isLoading: true,
  category: EMPTY_STRING,
  searchValue: EMPTY_STRING,
  filmId: EMPTY_STRING,
  isPlayerOpened: false,
};

const films = createSlice({
  name: SLICE_NAMES.FILMS,
  initialState: initials,
  reducers: {
    setCategory: (state, { payload }) => {
      return { ...state, category: payload };
    },
    setFilms: (state, { payload }) => {
      return { ...state, films: payload };
    },
    setSearchValue: (state, { payload }) => {
      return { ...state, searchValue: payload };
    },
    setIsLoading: (state, { payload }) => {
      return { ...state, isLoading: payload };
    },
    setIsPlayerOpened: (state, { payload }) => {
      return { ...state, isPlayerOpened: payload };
    },
    setSelectedFilmId: (state, { payload }) => {
      return { ...state, filmId: payload };
    },
  },
});

export const {
  setCategory,
  setFilms,
  setIsLoading,
  setSearchValue,
  setIsPlayerOpened,
  setSelectedFilmId,
} = films.actions;

export const getCategory = (state: RootState) => state.films.category;
export const getFilms = (state: RootState) => state.films.films;
export const getIsLoading = (state: RootState) => state.films.isLoading;
export const getSearchValue = (state: RootState) => state.films.searchValue;
export const getSelectedFilmId = (state: RootState) => state.films.filmId;
export const getIsPlayerOpened = (state: RootState) =>
  state.films.isPlayerOpened;

export default films.reducer;
