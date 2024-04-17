import { EMPTY_STRING } from '@/contants';
import { saveSearchResult } from '@/store/slices';
import { Film, ISelectedFilmHelper } from '@/types';
import { getKey } from '@/utils';

const selectedFilmHandler = ({
  selectedFilmId,
  elasticStorage,
  setFilm,
  getFilmById,
  dispatch,
}: ISelectedFilmHelper) => {
  if (!selectedFilmId) return;

  const key = getKey(selectedFilmId);

  if (elasticStorage[key]) {
    setFilm(elasticStorage[key] as Film);

    return;
  }

  getFilmById(EMPTY_STRING).then(({ data }) => {
    if (!data) return;

    setFilm(data);
    dispatch(saveSearchResult({ key, result: data }));
  });
};

export { selectedFilmHandler };
