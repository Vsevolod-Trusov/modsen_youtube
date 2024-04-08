import { ALL_CATEGORY } from '@/contants';
import { Film } from '@/types';

export const getFilteresList = (
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
