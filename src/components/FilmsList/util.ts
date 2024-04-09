import { ALL_CATEGORY, EMPTY_STRING } from '@/contants';
import { Film } from '@/types';

export const getFilteredList = (
  films: Film[],
  category: string,
  searchValue: string,
) => {
  let data = films;

  if (category) {
    data =
      category !== ALL_CATEGORY
        ? films.filter((film) =>
            film.genre
              .map((item) => item.toLowerCase())
              .includes(category.toLowerCase()),
          )
        : films;
  }

  if (searchValue) {
    data = data?.filter((film) =>
      film.title.toLowerCase().includes(searchValue.toLowerCase()),
    );
  }

  return data;
};

export const getKey = (searchValue: string, category: string) => {
  let key = EMPTY_STRING;

  if (searchValue) {
    key += searchValue;
  }

  if (category) {
    key += category;
  }

  return key.toLowerCase();
};
