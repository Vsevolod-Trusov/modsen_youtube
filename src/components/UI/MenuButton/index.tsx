import React from 'react';

import { Menu } from '@/assets';
import { Image } from '@/components';

import { StyledButton, StyledContainer } from './styled';

const MenuButton = () => {
  return (
    <StyledContainer>
      <StyledButton>
        <Image src={Menu} />
      </StyledButton>
    </StyledContainer>
  );
};
export default MenuButton;
