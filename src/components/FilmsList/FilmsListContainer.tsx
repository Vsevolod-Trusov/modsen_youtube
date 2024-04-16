import React, { FC, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { DEBOUNCE_TIME, DEFAULT_AMOUNT, ZERO } from '@/contants';
import { useDebouncedFunction, useTypedSelector } from '@/hooks';
import { useLazyGetFilteredFilmsQuery } from '@/store/api';
import {
  getCategory,
  getFilms,
  getSearchValue,
  getStorage,
  saveSearchResult,
} from '@/store/slices';
import { Film } from '@/types';

import FilmsList from './FilmsList';
import { getFilteredList, getKey } from './util';

const FilmsListContainer: FC = () => {
  const films = useTypedSelector(getFilms);
  const category = useTypedSelector(getCategory);
  const searchValue = useTypedSelector(getSearchValue);
  const elasticStorage = useTypedSelector(getStorage);
  const [findFilms] = useLazyGetFilteredFilmsQuery();
  const dispatch = useDispatch();
  const debounceFindFilms = useDebouncedFunction({
    func: (searchValue, key) => {
      const filmsPromise = findFilms(searchValue);
      filmsPromise.then(({ data }) => {
        const list = getFilteredList(
          Array.from(data as Film[]),
          category,
          searchValue,
        );

        if (key) {
          dispatch(saveSearchResult({ key, result: list }));
        }

        setCurrentFilms(list?.slice(ZERO, amount));
        return;
      });
    },
    delay: DEBOUNCE_TIME,
  });

  const debounceCachedFilms = useDebouncedFunction({
    func: (films) => {
      setCurrentFilms(films?.slice(ZERO, amount));
    },
    delay: DEBOUNCE_TIME,
  });
  const [amount, setAmount] = useState(DEFAULT_AMOUNT);
  const [currentFilms, setCurrentFilms] = useState<Film[]>([]);

  useEffect(() => {
    const key = getKey(searchValue, category);

    if (elasticStorage[key]) {
      debounceCachedFilms(elasticStorage[key]);

      return;
    }

    debounceFindFilms(searchValue, key);
  }, [films, amount, category, searchValue]);

  const handleGetMore = () => {
    setAmount((prevState) => prevState + DEFAULT_AMOUNT);
  };

  return (
    <FilmsList currentFilms={currentFilms} handleGetMore={handleGetMore} />
  );
};
export default FilmsListContainer;
