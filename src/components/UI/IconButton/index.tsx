import React, { FC } from 'react';

import { StyledAvatar } from '@/components/FilmCard/styled';

import { StyledContainer } from './styled';
import { IIconButton } from './types';

const IconButton: FC<IIconButton> = ({ link, img }) => {
  return (
    <StyledContainer>
      <a href={link}>
        <StyledAvatar src={img} />
      </a>
    </StyledContainer>
  );
};
export { IconButton };
