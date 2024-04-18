import React, { FC } from 'react';
import { useDispatch } from 'react-redux';

import { Image } from '@/components';
import { TEST_IDS } from '@/constants';
import { openPopupHandler } from '@/helpers';
import { IImage } from '@/types';

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

const FilmCard: FC<IImage> = ({
  avatar,
  preview,
  title,
  author,
  createdAt,
  id,
}) => {
  const dispatch = useDispatch();

  const handleOpen = () => {
    openPopupHandler({ dispatch, id });
  };

  return (
    <StyledContainer onClick={handleOpen} data-test-id={TEST_IDS.FILM_ITEM_ID}>
      <StyledPreviewSection>
        <Image src={preview} alt={'img'} data-test-id={TEST_IDS.IMAGE_ID} />
      </StyledPreviewSection>
      <StyledDescriptionSection>
        <StyledAvatarContainer>
          <StyledAvatar src={avatar} alt={'img'} />
        </StyledAvatarContainer>
        <StyledAuthorSection>
          <StyledTitle data-test-id={TEST_IDS.TITLE_ID}>{title}</StyledTitle>
          <div>
            <StyledSubTitle data-test-id={TEST_IDS.AUTHOR_ID}>
              {author}
            </StyledSubTitle>
            <StyledSubTitle>&#8226;</StyledSubTitle>
            <StyledSubTitle data-test-id={TEST_IDS.YEAR_ID}>
              {createdAt}
            </StyledSubTitle>
          </div>
        </StyledAuthorSection>
      </StyledDescriptionSection>
    </StyledContainer>
  );
};
export { FilmCard };
