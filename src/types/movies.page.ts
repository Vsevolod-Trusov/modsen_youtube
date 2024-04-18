import { RefObject } from 'react';

import { Film } from './video';

export interface IMoviesPage {
  films: Film[];
  loading: boolean;
}

export interface IFilmsList {
  currentFilms: Film[];
  handleGetMore: () => void;
  endOfListRef: RefObject<HTMLDivElement>;
}

export interface ISkeletonLoadersList {
  amount: number;
}
