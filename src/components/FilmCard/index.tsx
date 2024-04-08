import React, { FC } from 'react';

import { Image } from '@/components';

import { setIsPlayerOpened } from '@/store/slices';
import { useDispatch } from 'react-redux';
import {
  StyledAuthorSection,
  StyledAvatar,
  StyledAvatarContainer,
  StyledContainer,
  StyledDescriptionSection,
  StyledPreviewSection,
  StyledSubTitle,
  StyledTitle,
} from './styled';
import { IImage } from './types';

const FilmCard: FC<IImage> = ({
  avatar,
  preview,
  title,
  author,
  createdAt,
}) => {
  const dispatch = useDispatch();

  const handleOpenPlayer = () => {
    dispatch(setIsPlayerOpened(true));
  };

  return (
    <StyledContainer onClick={handleOpenPlayer}>
      <StyledPreviewSection>
        <Image src={preview} alt={'img'} />
      </StyledPreviewSection>
      <StyledDescriptionSection>
        <StyledAvatarContainer>
          <StyledAvatar src={avatar} alt={'img'} />
        </StyledAvatarContainer>
        <StyledAuthorSection>
          <StyledTitle>{title}</StyledTitle>
          <div>
            <StyledSubTitle>{author}</StyledSubTitle>
            <StyledSubTitle>&#8226;</StyledSubTitle>
            <StyledSubTitle>{createdAt}</StyledSubTitle>
          </div>
        </StyledAuthorSection>
      </StyledDescriptionSection>
    </StyledContainer>
  );
};
export default FilmCard;
