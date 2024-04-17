import { EMPTY_STRING } from '@/contants';
import { IDebounceHelper, IStorage } from '@/types';
import { getKey } from '@/utils';

const debounceHandler = ({
  searchValue,
  category,
  elasticStorage,
  debounceCachedFilms,
  debounceFindFilms,
}: IDebounceHelper) => {
  const newKey = getKey(searchValue, category);

  if (newKey === EMPTY_STRING) return;

  const indexStorageCeil = elasticStorage.storage.findIndex(
    ({ key }: IStorage) => key === newKey,
  );
  if (indexStorageCeil !== -1) {
    debounceCachedFilms(elasticStorage.storage[indexStorageCeil].value);

    return;
  }

  debounceFindFilms(searchValue, newKey);
};

export { debounceHandler };
