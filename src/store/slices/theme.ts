import { createSlice } from '@reduxjs/toolkit';

import { DEFAULT_THEME, LOCALSTORAGE_NAMES, SLICE_NAMES } from '@/contants';
import { RootState } from '@/store';
import { ITheme } from '@/types';

const initials: ITheme = {
  current: JSON.parse(
    localStorage.getItem(LOCALSTORAGE_NAMES.THEME) || DEFAULT_THEME,
  )?.current,
};

const theme = createSlice({
  name: SLICE_NAMES.THEME,
  initialState: initials,
  reducers: {
    toggleTheme: (state, { payload }) => {
      return { current: payload };
    },
  },
});

export const { toggleTheme } = theme.actions;

export const getCurrentThemeValue = (state: RootState) => state.theme.current;

export default theme.reducer;
