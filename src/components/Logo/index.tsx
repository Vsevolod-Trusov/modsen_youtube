import React, { FC } from 'react';

import { LogoIcon } from '@/assets';
import { Image } from '@/components';
import { ILogo } from '@/types';

import { StyledContainer, StyledImageWrapper, StyledLogoText } from './styled';

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
