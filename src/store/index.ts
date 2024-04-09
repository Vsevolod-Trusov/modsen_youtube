import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { videoApi } from './api';
import { elastic, films, theme } from './slices';

export const store = configureStore({
  reducer: {
    [videoApi.reducerPath]: videoApi.reducer,
    theme,
    films,
    elastic,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(videoApi.middleware),
});

setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export type AppStore = typeof store;
export type AppDispatch = typeof store.dispatch;
