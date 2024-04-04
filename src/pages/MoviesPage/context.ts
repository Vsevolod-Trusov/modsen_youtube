import { IMoviesPage } from '@/types';
import { createContext } from 'react';

export const MoviesContext = createContext<IMoviesPage>({
  loading: true,
  films: [],
});
