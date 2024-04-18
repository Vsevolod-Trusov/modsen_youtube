import styled from 'styled-components';

import { DISPLAY_FLEX, FONT_FAMILY } from '@/constants';

const StyledContainer = styled('section')(({ theme }) => ({
  ...DISPLAY_FLEX,
  ...FONT_FAMILY,
  borderBottom: `2px solid ${theme.colors.darkThemeBackground || theme.colors.lightGray}`,

  '&:hover': {
    borderBottom: `2px solid ${theme.colors.darkGray}`,
    cursor: 'pointer',
    color: theme.colors.black,
    transition: '.1s',
  },
  '&:active': {
    borderBottom: `2px solid ${theme.colors.gray}`,
    transition: '.1s',
  },

  [`@media ${theme.breakpoints.sm}`]: {
    flexBasis: '100%',
  },
}));

export { StyledContainer };
