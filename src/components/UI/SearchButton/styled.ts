import { styled } from 'styled-components';

const StyledButton = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '57px',
  height: '38px',
  padding: '5px 15px',
  border: `1px solid ${theme.colors.gray}`,
  background: theme.colors.lightGray,

  '&:hover': {
    border: `1px solid ${theme.colors.darkGray}`,
    background: theme.colors.gray,
    transition: '.1s',
  },
  '&:active': {
    border: `1px solid ${theme.colors.black}`,
    background: theme.colors.white,
    transition: '.1s',
  },

  [`@media ${theme.breakpoints.sm}`]: {
    padding: '10px',
  },
}));

export { StyledButton };
