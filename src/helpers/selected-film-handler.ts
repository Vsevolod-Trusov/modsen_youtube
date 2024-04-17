import { EMPTY_STRING } from '@/contants';
import { saveSelectedFilm } from '@/store/slices';
import { Film, ISelectedFilmHelper, ISelectedFilmsStorage } from '@/types';
import { getKey } from '@/utils';

const selectedFilmHandler = ({
  selectedFilmId,
  elasticStorage,
  setFilm,
  getFilmById,
  dispatch,
}: ISelectedFilmHelper) => {
  if (!selectedFilmId) return;

  const newKey = getKey(selectedFilmId);

  const indexStorageCeil = elasticStorage.selectedFilmsStorage.findIndex(
    ({ key }: ISelectedFilmsStorage) => key === newKey,
  );
  if (indexStorageCeil !== -1) {
    setFilm(
      elasticStorage.selectedFilmsStorage[indexStorageCeil].value as Film,
    );

    return;
  }

  getFilmById(EMPTY_STRING).then(({ data }) => {
    if (!data) return;

    setFilm(data);
    dispatch(saveSelectedFilm({ key: newKey, result: data }));
  });
};

export { selectedFilmHandler };
