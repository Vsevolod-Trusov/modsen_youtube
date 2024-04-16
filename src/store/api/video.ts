import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { IMDB_HEADERS, METHODS, REDUCERS_PATH, URLS } from '@/contants';
import type { Film } from '@/types';

export const videoApi = createApi({
  reducerPath: REDUCERS_PATH.VIDEO,
  baseQuery: fetchBaseQuery({
    baseUrl: URLS.BASE,
  }),
  endpoints: (builder) => ({
    getFilms: builder.query<Film[], string>({
      query: () => {
        const controller = new AbortController();

        return {
          url: URLS.MOCKED_FILMS_DATA,
          method: METHODS.GET,
          headers: IMDB_HEADERS,
          signal: controller.signal,
        };
      },
    }),
    getFilteredFilms: builder.query<Film[], string>({
      query: () => {
        const controller = new AbortController();

        return {
          url: URLS.MOCKED_FILMS_DATA,
          method: METHODS.GET,
          headers: IMDB_HEADERS,
          signal: controller.signal,
        };
      },
    }),
    getFilmById: builder.query<Film, string>({
      query: () => {
        const controller = new AbortController();

        return {
          url: URLS.MOCKED_FILM_DATA,
          method: METHODS.GET,
          headers: IMDB_HEADERS,
          signal: controller.signal,
        };
      },
    }),
  }),
});

export const {
  useGetFilmsQuery,
  useGetFilmByIdQuery,
  useLazyGetFilmByIdQuery,
  useLazyGetFilteredFilmsQuery,
  useGetFilteredFilmsQuery,
} = videoApi;
