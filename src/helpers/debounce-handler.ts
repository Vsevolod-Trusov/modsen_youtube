import { EMPTY_STRING } from '@/contants';
import { IDebounceHelper } from '@/types';
import { getKey } from '@/utils';

const debounceHandler = ({
  searchValue,
  category,
  elasticStorage,
  debounceCachedFilms,
  debounceFindFilms,
}: IDebounceHelper) => {
  const key = getKey(searchValue, category);

  if (key === EMPTY_STRING) return;

  if (elasticStorage[key]) {
    debounceCachedFilms(elasticStorage[key]);

    return;
  }

  debounceFindFilms(searchValue, key);
};

export { debounceHandler };
