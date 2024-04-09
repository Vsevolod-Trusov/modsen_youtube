import React, { FC, useEffect, useState } from 'react';

import { DEFAULT_AMOUNT } from '@/contants';
import { useTypedSelector } from '@/hooks';
import {
  getCategory,
  getFilms,
  getSearchValue,
  getStorage,
  saveSearchResult,
} from '@/store/slices';
import { Film } from '@/types';

import { useDispatch } from 'react-redux';
import FilmsList from './FilmsList';
import { getFilteredList, getKey } from './util';

const FilmsListContainer: FC = () => {
  const films = useTypedSelector(getFilms);
  const category = useTypedSelector(getCategory);
  const searchValue = useTypedSelector(getSearchValue);
  const elasticStorage = useTypedSelector(getStorage);
  const dispatch = useDispatch();

  const [amount, setAmount] = useState(DEFAULT_AMOUNT);
  const [currentFilms, setCurrentFilms] = useState<Film[]>([]);

  useEffect(() => {
    const key = getKey(searchValue, category);
    let list = [];

    if (elasticStorage[key]) {
      list = elasticStorage[key];
    } else {
      list = getFilteredList(films, category, searchValue);
      if (key) {
        dispatch(saveSearchResult({ key, result: list }));
      }
    }

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
