import { styled } from 'styled-components';

import { DISPLAY_FLEX } from '@/contants';

const StyledContainer = styled('div')({
  ...DISPLAY_FLEX,
  width: '30%',
  margin: '0 auto',
});

const StyledErrorMessage = styled('p')(({ theme }) => ({
  textAlign: 'center',
  fontFamily: 'Roboto',
  fontSize: '24px',
  fontWeight: 500,

  [`@media ${theme.breakpoints.sm}`]: {
    fontSize: '14px',
  },
}));

export { StyledContainer, StyledErrorMessage };
