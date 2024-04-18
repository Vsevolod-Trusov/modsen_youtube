import { createSlice } from '@reduxjs/toolkit';

import { DEFAULT_THEME, LOCALSTORAGE_NAMES, SLICE_NAMES } from '@/constants';
import { RootState } from '@/store';
import { ITheme } from '@/types';

const initials: ITheme = {
  current: JSON.parse(
    localStorage.getItem(LOCALSTORAGE_NAMES.THEME) || DEFAULT_THEME,
  )?.current,
  isMenuOpened: false,
};

const theme = createSlice({
  name: SLICE_NAMES.THEME,
  initialState: initials,
  reducers: {
    toggleTheme: (state, { payload }) => ({ ...state, current: payload }),
    openMenu: (state, { payload }) => ({ ...state, isMenuOpened: payload }),
  },
});

export const { toggleTheme, openMenu } = theme.actions;

export const getCurrentThemeValue = (state: RootState) => state.theme.current;
export const getMenuOpened = (state: RootState) => state.theme.isMenuOpened;

export default theme.reducer;
