import React, { useContext, useState } from 'react';

import { AvatarIcon } from '@/assets';
import { FilmCard, ShowMoreButton } from '@/components';
import { AUTHOR_NAME, DEFAULT_AMOUNT, DICTIONARY } from '@/contants';
import { MoviesContext } from '@/pages/MoviesPage/context';

import { StyledFilmsContainer, StyledScrollButtonContainer } from './styled';

const FilmsList = () => {
  const { films } = useContext(MoviesContext);

  const [amount, setAmount] = useState(DEFAULT_AMOUNT);

  const handleGetMore = () => {
    setAmount((prevState) => prevState + DEFAULT_AMOUNT);
  };

  return (
    <>
      <StyledFilmsContainer>
        {films.slice(0, amount).map(({ title, year, image }) => (
          <FilmCard
            key={crypto.randomUUID()}
            preview={image}
            avatar={AvatarIcon}
            title={title}
            author={AUTHOR_NAME}
            createdAt={year.toString()}
          />
        ))}
      </StyledFilmsContainer>
      <StyledScrollButtonContainer>
        <ShowMoreButton onClick={handleGetMore}>
          {DICTIONARY.SHOW_MORE}
        </ShowMoreButton>
      </StyledScrollButtonContainer>
    </>
  );
};
export default FilmsList;
