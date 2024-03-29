import { styled } from 'styled-components';

const StyledContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  width: '100%',
  justifyContent: 'center',
  color: theme.colors.darkGray,
  fontFamily: ' Roboto',
  fontSize: '24px',
  fontWeight: 500,
  lineHeight: '28px',

  [`@media ${theme.breakpoints.sm}`]: {
    fontSize: '12px',
  },
}));

export { StyledContainer };
