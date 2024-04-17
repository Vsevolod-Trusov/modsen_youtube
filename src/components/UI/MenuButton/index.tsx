import React, { FC } from 'react';

import { Menu } from '@/assets';
import { Image } from '@/components';

import { StyledButton, StyledContainer } from './styled';

const MenuButton: FC = () => {
  return (
    <StyledContainer>
      <StyledButton>
        <Image src={Menu} />
      </StyledButton>
    </StyledContainer>
  );
};
export { MenuButton };
