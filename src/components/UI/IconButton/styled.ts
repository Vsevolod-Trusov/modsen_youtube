import { styled } from 'styled-components';

const StyledContainer = styled('div')(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  width: '3%',
  '&:hover': {
    cursor: 'pointer',
  },

  [`@media ${theme.breakpoints.sm}`]: {
    width: '16px',
  },
}));

export { StyledContainer };
