import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { IMDB_URLBASE, METHODS, REDUCERS_PATH, URLS } from '@/contants';
import type { Film } from '@/types';

export const videoApi = createApi({
  reducerPath: REDUCERS_PATH.VIDEO,
  baseQuery: fetchBaseQuery({
    baseUrl: IMDB_URLBASE,
  }),
  endpoints: (builder) => ({
    getFilms: builder.query<Film[], string>({
      query: () => ({
        url: URLS.BASE,
        method: METHODS.GET,
        headers: {
          'X-RapidAPI-Key':
            '8c9bdafd38msh548845b52cae500p1e2390jsn8eb226836660',
          'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com',
        },
      }),
    }),
  }),
});

export const { useGetFilmsQuery } = videoApi;
