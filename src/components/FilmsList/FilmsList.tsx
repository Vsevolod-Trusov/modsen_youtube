import React, { FC } from 'react';

import { AvatarIcon } from '@/assets';
import FilmCard from '@/components/FilmCard';
import { ShowMoreButton } from '@/components/UI';
import { AUTHOR_NAME, DICTIONARY, NO_SUCH_FILMS } from '@/contants';
import { IFilmsList } from '@/types';

import {
  StyledFilmsContainer,
  StyledMockContainer,
  StyledScrollButtonContainer,
} from './styled';

const FilmsList: FC<IFilmsList> = ({ currentFilms, handleGetMore }) => (
  <StyledFilmsContainer>
    {currentFilms.length ? (
      <>
        {currentFilms.map(({ title, year, image }) => (
          <FilmCard
            key={crypto.randomUUID()}
            preview={image}
            avatar={AvatarIcon}
            title={title}
            author={AUTHOR_NAME}
            createdAt={year.toString()}
          />
        ))}
        <StyledScrollButtonContainer>
          <ShowMoreButton onClick={handleGetMore}>
            {DICTIONARY.SHOW_MORE}
          </ShowMoreButton>
        </StyledScrollButtonContainer>
      </>
    ) : (
      <StyledMockContainer>
        <div>{NO_SUCH_FILMS}</div>
      </StyledMockContainer>
    )}
  </StyledFilmsContainer>
);

export default FilmsList;
