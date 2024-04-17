import { Dispatch as ReduxDispatch, UnknownAction } from '@reduxjs/toolkit';
import { LazyQueryTrigger } from '@reduxjs/toolkit/dist/query/react/buildHooks';
import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
  QueryDefinition,
} from '@reduxjs/toolkit/query';
import { Dispatch } from 'react';

import { REDUCERS_PATH } from '@/contants';

import { IElastic } from './store';
import { Film } from './video';

interface IDebounceHelper {
  searchValue: string;
  category?: string;
  debounceCachedFilms: (...args: any) => void;
  debounceFindFilms: (...args: any) => void;
  elasticStorage: IElastic;
}

interface ISelectedFilmHelper extends Pick<IDebounceHelper, 'elasticStorage'> {
  selectedFilmId?: string;
  setFilm: Dispatch<React.SetStateAction<Film>>;
  dispatch: ReduxDispatch<UnknownAction>;
  getFilmById: LazyQueryTrigger<
    QueryDefinition<
      string,
      BaseQueryFn<
        string | FetchArgs,
        unknown,
        FetchBaseQueryError,
        {},
        FetchBaseQueryMeta
      >,
      never,
      Film,
      REDUCERS_PATH
    >
  >;
}

export { IDebounceHelper, ISelectedFilmHelper };
