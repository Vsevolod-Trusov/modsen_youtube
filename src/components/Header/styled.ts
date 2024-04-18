import { styled } from 'styled-components';

import { DISPLAY_FLEX } from '@/constants';

const StyledHeaderContainer = styled('header')(({ theme }) => ({
  height: '160px',
  backgroundColor: 'transparent',
  flexShrink: '0',

  [`@media ${theme.breakpoints.sm}`]: {
    height: '270PX',
  },
}));

const StyledHeaderWrapper = styled('nav')({
  ...DISPLAY_FLEX,
  width: '100%',
  height: '100%',
});

export { StyledHeaderContainer, StyledHeaderWrapper };
