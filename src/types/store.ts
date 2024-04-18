import { Film } from './video';

export interface ITheme {
  current: boolean;
  isMenuOpened: boolean;
}

export interface IFilmStore {
  films: Film[];
  isLoading: boolean;
  category: string;
  searchValue: string;
  filmId: string;
  isPlayerOpened: boolean;
}

export interface IStorage {
  key: string;
  value: Film[];
}

export interface ISelectedFilmsStorage {
  key: string;
  value: Film;
}

export interface IElastic {
  storage: IStorage[];
  selectedFilmsStorage: ISelectedFilmsStorage[];
}
