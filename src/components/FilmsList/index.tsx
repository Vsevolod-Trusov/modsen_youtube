import React, { useContext } from 'react';

import { AvatarIcon } from '@/assets';
import { FilmCard, ShowMoreButton } from '@/components';
import { DICTIONARY } from '@/contants';
import { MoviesContext } from '@/pages/MoviesPage/context';

import { StyledFilmsContainer, StyledScrollButtonContainer } from './styled';

const FilmsList = () => {
  const { films } = useContext(MoviesContext);

  return (
    <>
      <StyledFilmsContainer>
        {films.slice(0, 16).map(({ title, year, image }) => (
          <FilmCard
            key={crypto.randomUUID()}
            preview={image}
            avatar={AvatarIcon}
            title={title}
            author={'Stephen King'}
            createdAt={year.toString()}
          />
        ))}
      </StyledFilmsContainer>
      <StyledScrollButtonContainer>
        <ShowMoreButton>{DICTIONARY.SHOW_MORE}</ShowMoreButton>
      </StyledScrollButtonContainer>
    </>
  );
};
export default FilmsList;
