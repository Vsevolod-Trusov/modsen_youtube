import { Film } from './video';

export interface ITheme {
  current: boolean;
}

export interface IFilmStore {
  films: Film[];
  isLoading: boolean;
  category: string;
  searchValue: string;
  filmId: string;
  isPlayerOpened: boolean;
}
