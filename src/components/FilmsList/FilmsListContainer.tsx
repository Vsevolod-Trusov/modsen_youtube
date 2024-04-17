import React, { FC, useCallback, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';

import { DEBOUNCE_TIME, DEFAULT_AMOUNT, ZERO } from '@/contants';
import { debounceHandler } from '@/helpers';
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
import { getFilteredList } from '@/utils';

import { FilmsList } from './FilmsList';

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
  const currentFilms = useMemo(
    () => films.slice(ZERO, amount),
    [films, amount],
  );
  const handleGetMore = useCallback(() => {
    setAmount((prevState) => prevState + DEFAULT_AMOUNT);
  }, [setAmount]);
  const filterFilms = useCallback(() => {
    debounceHandler({
      searchValue,
      category,
      elasticStorage,
      debounceCachedFilms,
      debounceFindFilms,
    });
  }, [
    searchValue,
    category,
    elasticStorage,
    debounceCachedFilms,
    debounceFindFilms,
  ]);

  filterFilms();

  return (
    <FilmsList currentFilms={currentFilms} handleGetMore={handleGetMore} />
  );
};
export default FilmsListContainer;
