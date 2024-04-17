interface IDebounceHelper {
  searchValue: string;
  category?: string;
  debounceCachedFilms: (...args: any) => void;
  debounceFindFilms: (...args: any) => void;
  elasticStorage: any;
}

export { IDebounceHelper };
