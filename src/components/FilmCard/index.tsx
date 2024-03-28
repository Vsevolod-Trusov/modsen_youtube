import React, { FC } from 'react';

import { Image } from '@/components';

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

interface IImage {
  avatar: string;
  preview: string;
  author: string;
  title: string;
  createdAt: string;
}

const FilmCard: FC<IImage> = ({
  avatar,
  preview,
  title,
  author,
  createdAt,
}) => {
  return (
    <StyledContainer>
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
