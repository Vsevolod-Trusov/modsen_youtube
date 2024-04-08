import React, { useEffect } from 'react';

import { setfilms, setIsLoading } from '@/store/slices';
import { useDispatch } from 'react-redux';
import MoviesPage from './MoviesPage';

const MoviesPageContainer = () => {
  //const { data, error, isLoading } = useGetFilmsQuery('');

  const dispatch = useDispatch();

  useEffect(() => {
    const controller = new AbortController();
    fetch('../../../data.json', {
      signal: controller.signal,
    })
      .then((res) => {
        if (res.status === 200) return res.json();
        else {
          return Promise.reject(res);
        }
      })
      .then((data) => {
        dispatch(setfilms(data));
      })
      .catch((e) => {
        if (e?.name === 'AbortError') return;
      })
      .finally(() => {
        dispatch(setIsLoading(false));
      });

    return () => {
      controller.abort();
    };
  }, []);

  // useEffect(() => {
  //   if (data && data.length > 0) {
  //     localStorage.setItem('films', JSON.stringify(data));
  //     setFilms((prev) => data);
  //   }
  // }, [data]);

  return <MoviesPage />;
};
export default MoviesPageContainer;
