import { styled } from 'styled-components';

import { DISPLAY_FLEX, FONT_FAMILY } from '@/contants';

const StyledContainer = styled('div')(({ theme }) => ({
  ...DISPLAY_FLEX,
  justifyContent: 'flex-start',
  width: '50%',
  height: '100%',
  ...FONT_FAMILY,
  fontSize: '20px',
  fontWeight: 500,
  lineHeight: '23px',

  [`@media ${theme.breakpoints.sm}`]: {
    width: '100%',
    height: '20%',
    fontSize: '18px',
  },
}));

const StyledText = styled('span')(({ theme }) => ({
  wordSpacing: '3px',

  [`@media ${theme.breakpoints.sm}`]: {
    display: 'flex',
    width: '100%',
    wordSpacing: '1px',
  },
}));

const StyledMetadataSection = styled('div')(({ theme }) => ({
  display: 'flex',
  width: '100%',
  height: '100%',
  color: theme.colors.darkThemeWhite || theme.colors.black,

  [`@media ${theme.breakpoints.sm}`]: {
    rowGap: '50px',
    flexDirection: 'column-reverse',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
}));

const StyledLinksContainer = styled('div')(({ theme }) => ({
  width: '100%',

  [`@media ${theme.breakpoints.sm}`]: {
    height: '10%',
  },
}));

const StyledShowLinksContainer = styled(StyledLinksContainer)(({ theme }) => ({
  display: 'none',

  [`@media ${theme.breakpoints.sm}`]: {
    display: 'block',
    height: '10%',
  },
}));

const StyledHideLinksContainer = styled(StyledLinksContainer)(({ theme }) => ({
  [`@media ${theme.breakpoints.sm}`]: {
    display: 'none',
  },
}));

const StyledIconButtonsWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-end',
  columnGap: '30px',
  width: '100%',
  height: '100%',

  [`@media ${theme.breakpoints.sm}`]: {
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

export {
  StyledContainer,
  StyledHideLinksContainer,
  StyledIconButtonsWrapper,
  StyledLinksContainer,
  StyledMetadataSection,
  StyledShowLinksContainer,
  StyledText,
};
