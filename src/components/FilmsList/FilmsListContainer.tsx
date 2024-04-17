import React, { FC, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { DEBOUNCE_TIME, DEFAULT_AMOUNT, EMPTY_STRING, ZERO } from '@/contants';
import { useDebouncedFunction, useTypedSelector } from '@/hooks';
import { useLazyGetFilteredFilmsQuery } from '@/store/api';
import {
  getCategory,
  getFilms,
  getSearchValue,
  getStorage,
  saveSearchResult,
  setFilms,
} from '@/store/slices';
import { Film } from '@/types';
import { getFilteredList, getKey } from '@/utils';

import FilmsList from './FilmsList';

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

        dispatch(setFilms(list?.slice(ZERO, amount)));
        return;
      });
    },
    delay: DEBOUNCE_TIME,
  });

  const debounceCachedFilms = useDebouncedFunction({
    func: (films) => {
      dispatch(setFilms(films?.slice(ZERO, amount)));
    },
    delay: DEBOUNCE_TIME,
  });
  const [amount, setAmount] = useState(DEFAULT_AMOUNT);

  const handleGetMore = () => {
    setAmount((prevState) => prevState + DEFAULT_AMOUNT);
  };

  const currentFilms = films.slice(ZERO, amount);

  useEffect(() => {
    const key = getKey(searchValue, category);

    if (key === EMPTY_STRING) return;

    if (elasticStorage[key]) {
      debounceCachedFilms(elasticStorage[key]);

      return;
    }

    debounceFindFilms(searchValue, key);
  }, [amount, category, searchValue]);

  return (
    <FilmsList currentFilms={currentFilms} handleGetMore={handleGetMore} />
  );
};
export default FilmsListContainer;
