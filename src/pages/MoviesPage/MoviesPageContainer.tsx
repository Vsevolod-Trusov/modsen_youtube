import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { EMPTY_STRING } from '@/contants';
import { useGetFilmsQuery } from '@/store/api';
import { setFilms, setIsLoading } from '@/store/slices';

import MoviesPage from './MoviesPage';

const MoviesPageContainer = () => {
  const { data, isLoading } = useGetFilmsQuery(EMPTY_STRING);

  const dispatch = useDispatch();

  useEffect(() => {
    if (data && data.length > 0) {
      dispatch(setFilms(data));
    }
    dispatch(setIsLoading(isLoading));
  }, [data, isLoading]);

  return <MoviesPage />;
};
export default MoviesPageContainer;
