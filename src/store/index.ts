import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { videoApi } from './api';
import { films, theme } from './slices';

export const store = configureStore({
  reducer: {
    [videoApi.reducerPath]: videoApi.reducer,
    theme,
    films,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(videoApi.middleware),
});

setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
