import React from 'react';
import { useDispatch } from 'react-redux';

import { ToggleButton } from '@/components';
import { CloseButton } from '@/components/PopupPlayer/styled';
import { NAV_LINKS } from '@/constants';
import { useTypedSelector } from '@/hooks';
import { getMenuOpened, openMenu } from '@/store/slices';

import {
  StyledActiveContainer,
  StyledButtonWrapper,
  StyledContainer,
  StyledLink,
  StyledNavMenu,
  StyledNavMenuWrapper,
  StyledWrapper,
} from './styled';

const Menu = () => {
  const isMenuOpened = useTypedSelector(getMenuOpened);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(openMenu(!isMenuOpened));
  };

  return (
    <>
      {isMenuOpened ? (
        <StyledActiveContainer>
          <StyledWrapper>
            <StyledButtonWrapper>
              <ToggleButton />
            </StyledButtonWrapper>
            <StyledButtonWrapper>
              <CloseButton onClick={handleClose}>&times;</CloseButton>
            </StyledButtonWrapper>
          </StyledWrapper>
          <StyledNavMenuWrapper>
            <StyledNavMenu>
              <StyledLink href='#'>{NAV_LINKS.MAIN}</StyledLink>
              <StyledLink href='#'>{NAV_LINKS.NEWS}</StyledLink>
              <StyledLink href='#'>{NAV_LINKS.CONTACTS}</StyledLink>
            </StyledNavMenu>
          </StyledNavMenuWrapper>
        </StyledActiveContainer>
      ) : (
        <StyledContainer />
      )}
    </>
  );
};
export { Menu };
