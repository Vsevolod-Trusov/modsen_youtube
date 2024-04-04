import React, { useEffect, useState } from 'react';

import { Film } from '@/types';

import MoviesPage from './MoviesPage';
import { MoviesContext } from './context';

const MoviesPageContainer = () => {
  //const { data, error, isLoading } = useGetFilmsQuery('');

  const [films, setFilms] = useState<Film[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    setFilms([]);
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
        setFilms(data);
      })
      .catch((e) => {
        if (e?.name === 'AbortError') return;
      })
      .finally(() => {
        setLoading(false);
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

  return (
    <MoviesContext.Provider value={{ loading, films }}>
      <MoviesPage />
    </MoviesContext.Provider>
  );
};
export default MoviesPageContainer;
