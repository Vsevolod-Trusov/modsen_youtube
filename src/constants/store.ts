const DEFAULT_THEME = JSON.stringify({ current: false });
enum LOCALSTORAGE_NAMES {
  THEME = 'theme',
}
const enum SLICE_NAMES {
  THEME = 'theme',
  FILMS = 'films',
  ELASTIC = 'elastic',
}

const enum REDUCERS_PATH {
  VIDEO = 'videoApi',
}

export { DEFAULT_THEME, LOCALSTORAGE_NAMES, REDUCERS_PATH, SLICE_NAMES };
