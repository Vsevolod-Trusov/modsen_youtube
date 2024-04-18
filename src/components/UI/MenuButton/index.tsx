import React, { FC } from 'react';
import { useDispatch } from 'react-redux';

import { Menu } from '@/assets';
import { Image } from '@/components';
import { useTypedSelector } from '@/hooks';
import { getMenuOpened, openMenu } from '@/store/slices';

import { StyledButton, StyledContainer } from './styled';

const MenuButton: FC = () => {
  const isMenuOpened = useTypedSelector(getMenuOpened);
  const dispatch = useDispatch();

  const handleMenuOpen = () => {
    dispatch(openMenu(!isMenuOpened));
  };

  return (
    <StyledContainer onClick={handleMenuOpen}>
      <StyledButton>
        <Image src={Menu} />
      </StyledButton>
    </StyledContainer>
  );
};

export { MenuButton };
