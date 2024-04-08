import { Film } from './video';

export interface ITheme {
  current: boolean;
}

export interface IFilter {
  films: Film[];
  isLoading: boolean;
  category: string;
  searchValue: string;
}
