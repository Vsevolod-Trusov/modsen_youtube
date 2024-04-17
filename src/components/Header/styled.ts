import { styled } from 'styled-components';

const StyledHeaderContainer = styled('header')(({ theme }) => ({
  height: '160px',
  backgroundColor: 'transparent',
  flexShrink: '0',

  [`@media ${theme.breakpoints.sm}`]: {
    height: '200px',
  },
}));

const StyledHeaderWrapper = styled('nav')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100%',

  [`@media ${theme.breakpoints.sm}`]: {
    justifyContent: 'space-between',
  },
}));

export { StyledHeaderContainer, StyledHeaderWrapper };
