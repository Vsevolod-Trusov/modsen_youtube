import React, { FC } from 'react';

import { LogoIcon } from '@/assets';
import { Image } from '@/components';

import { StyledContainer, StyledImageWrapper, StyledLogoText } from './styled';
import { ILogo } from './types';

const Logo: FC<ILogo> = ({ title }) => {
  return (
    <StyledContainer>
      <StyledImageWrapper>
        <Image src={LogoIcon} />
      </StyledImageWrapper>
      <StyledLogoText>{title}</StyledLogoText>
    </StyledContainer>
  );
};
export { Logo };
