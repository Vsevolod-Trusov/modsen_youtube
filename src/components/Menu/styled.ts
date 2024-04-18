import styled from 'styled-components';

import { DISPLAY_FLEX, FONT_FAMILY } from '@/constants';

const StyledContainer = styled('div')(({ theme }) => ({
  position: 'absolute',
  height: '100vh',
  width: '78%',
  background: theme.colors.darkThemeElasticBackground || theme.colors.gray,
  transform: 'translateX(-100%)',
}));

const StyledActiveContainer = styled(StyledContainer)({
  position: 'fixed',
  transform: 'translateX(0%)',
});

const StyledNavMenu = styled('nav')(({ theme }) => ({
  ...DISPLAY_FLEX,
  color: theme.colors.darkThemeWhite || theme.colors.black,

  justifyContent: 'space-around',
  alignItems: 'center',
  height: '20%',
}));

const StyledNavMenuWrapper = styled('nav')({
  ...DISPLAY_FLEX,
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  width: '100%',
});

const StyledWrapper = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
});

const StyledButtonWrapper = styled('div')({
  padding: '5px',
  flexBasis: '30%',
});

const StyledLink = styled('a')(({ theme }) => ({
  ...FONT_FAMILY,
  fontSize: '18px',
  fontWeight: '700',
  lineHeight: '21px',
  color: theme.colors.darkThemeWhite || theme.colors.black,
  textDecoration: 'none',
}));

export {
  StyledActiveContainer,
  StyledButtonWrapper,
  StyledContainer,
  StyledLink,
  StyledNavMenu,
  StyledNavMenuWrapper,
  StyledWrapper,
};
