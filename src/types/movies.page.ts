import { Film } from './video';

export interface IMoviesPage {
  films: Film[];
  loading: boolean;
}

export interface ISkeletonLoadersList {
  amount: number;
}
