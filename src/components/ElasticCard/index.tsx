import React, { FC } from 'react';
import { useDispatch } from 'react-redux';

import { StyledSubTitle, StyledTitle } from '@/components/FilmCard/styled';
import { EMPTY_STRING } from '@/constants';
import { openPopupHandler } from '@/helpers';
import { setSearchValue } from '@/store/slices';
import { IElasticCard } from '@/types';

import { StyledContainer } from './styled';

const ElasticCard: FC<IElasticCard> = ({ id, title, author, createdAt }) => {
  const dispatch = useDispatch();

  const handleOpen = () => {
    dispatch(setSearchValue(EMPTY_STRING));
    openPopupHandler({ dispatch, id });
  };

  return (
    <>
      <StyledContainer onClick={handleOpen}>
        <StyledTitle>{title}</StyledTitle>
        <div>
          <StyledSubTitle>{author}</StyledSubTitle>
          <StyledSubTitle>&#8226;</StyledSubTitle>
          <StyledSubTitle>{createdAt}</StyledSubTitle>
        </div>
      </StyledContainer>
    </>
  );
};
export { ElasticCard };
