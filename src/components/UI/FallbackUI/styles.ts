import { styled } from 'styled-components';

const StyledContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
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
