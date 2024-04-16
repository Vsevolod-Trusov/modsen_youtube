import React, { FC } from 'react';
import { useDispatch } from 'react-redux';

import { Image } from '@/components';
import { TEST_IDS } from '@/contants';
import { setIsPlayerOpened, setSelectedFilmId } from '@/store/slices';

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
  id,
}) => {
  const dispatch = useDispatch();

  const handleOpenPlayer = () => {
    dispatch(setIsPlayerOpened(true));
    dispatch(setSelectedFilmId(id));
  };

  return (
    <StyledContainer onClick={handleOpenPlayer} test-id={id}>
      <StyledPreviewSection>
        <Image src={preview} alt={'img'} testId={TEST_IDS.IMAGE_ID} />
      </StyledPreviewSection>
      <StyledDescriptionSection>
        <StyledAvatarContainer>
          <StyledAvatar src={avatar} alt={'img'} />
        </StyledAvatarContainer>
        <StyledAuthorSection>
          <StyledTitle test-id={TEST_IDS.TITLE_ID}>{title}</StyledTitle>
          <div>
            <StyledSubTitle test-id={TEST_IDS.AUTHOR_ID}>
              {author}
            </StyledSubTitle>
            <StyledSubTitle>&#8226;</StyledSubTitle>
            <StyledSubTitle test-id={TEST_IDS.YEAR_ID}>
              {createdAt}
            </StyledSubTitle>
          </div>
        </StyledAuthorSection>
      </StyledDescriptionSection>
    </StyledContainer>
  );
};
export default FilmCard;
