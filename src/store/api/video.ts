import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import {
  IMDB_HEADERS,
  IMDB_URLBASE,
  METHODS,
  REDUCERS_PATH,
  URLS,
} from '@/contants';
import type { Film } from '@/types';

export const videoApi = createApi({
  reducerPath: REDUCERS_PATH.VIDEO,
  baseQuery: fetchBaseQuery({
    baseUrl: IMDB_URLBASE,
  }),
  endpoints: (builder) => ({
    getFilms: builder.query<Film[], string>({
      query: () => {
        const controller = new AbortController();

        return {
          url: URLS.BASE,
          method: METHODS.GET,
          headers: IMDB_HEADERS,
          signal: controller.signal,
        };
      },
    }),
    getFilmById: builder.query<Film, string>({
      query: (id: string) => {
        const controller = new AbortController();

        return {
          url: `/${id}`,
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
} = videoApi;
