import React, { FC, useEffect, useState } from 'react';

import { DEFAULT_AMOUNT } from '@/contants';
import { useTypedSelector } from '@/hooks';
import { getCategory, getFilms, getSearchValue } from '@/store/slices';
import { Film } from '@/types';

import FilmsList from './FilmsList';
import { getFilteresList } from './util';

const FilmsListContainer: FC = () => {
  const films = useTypedSelector(getFilms);
  const category = useTypedSelector(getCategory);
  const searchValue = useTypedSelector(getSearchValue);

  const [amount, setAmount] = useState(DEFAULT_AMOUNT);
  const [currentFilms, setCurrentFilms] = useState<Film[]>([]);

  useEffect(() => {
    const list = getFilteresList(films, category, searchValue);

    setCurrentFilms(list?.slice(0, amount));
  }, [films, amount, category, searchValue]);

  const handleGetMore = () => {
    setAmount((prevState) => prevState + DEFAULT_AMOUNT);
  };

  return (
    <FilmsList currentFilms={currentFilms} handleGetMore={handleGetMore} />
  );
};
export default FilmsListContainer;
