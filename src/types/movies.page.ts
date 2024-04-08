import { Film } from './video';

export interface IMoviesPage {
  films: Film[];
  loading: boolean;
}

export interface IFilmsList {
  currentFilms: Film[];
  handleGetMore: () => void;
}

export interface ISkeletonLoadersList {
  amount: number;
}
