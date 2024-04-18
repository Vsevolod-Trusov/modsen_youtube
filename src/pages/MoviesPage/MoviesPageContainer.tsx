import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { EMPTY_STRING } from '@/constants';
import { useTypedSelector } from '@/hooks';
import { useLazyGetFilmsQuery } from '@/store/api';
import { getFilms, setFilms, setIsLoading } from '@/store/slices';

import { MoviesPage } from './MoviesPage';

const MoviesPageContainer = () => {
  const [getApiFilms, { isLoading }] = useLazyGetFilmsQuery();
  const films = useTypedSelector(getFilms);

  const dispatch = useDispatch();

  useEffect(() => {
    if (films.length) {
      dispatch(setIsLoading(false));

      return;
    }

    getApiFilms(EMPTY_STRING).then(({ data }) => {
      dispatch(setFilms(data));
    });
  }, []);

  useEffect(() => {
    dispatch(setIsLoading(isLoading));
  }, [isLoading]);

  return <MoviesPage />;
};
export default MoviesPageContainer;
