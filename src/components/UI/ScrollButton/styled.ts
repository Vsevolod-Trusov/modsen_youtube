import styled from 'styled-components';

const StyledButton = styled('button')(({ theme }) => ({
  width: '192px',
  height: '52px',
  borderRadius: '10px',
  border: 'none',
  backgroundColor: theme.colors.orange,
  color: theme.colors.darkThemeWhite || theme.colors.white,
  fontFamily: 'Roboto',
  fontSize: '22px',
  fontWeight: '700',
  lineHeight: '26px',
  textAlign: 'center',

  '&:hover': {
    backgroundColor: theme.colors.darkOrange,
    transition: '.1s',
  },

  '&:active': {
    backgroundColor: theme.colors.lightOrange,
    transition: '.1s',
  },

  [`@media ${theme.breakpoints.sm}`]: {
    width: '230px',
    height: '32px',
    fontSize: '16px',
  },
}));

export { StyledButton };
