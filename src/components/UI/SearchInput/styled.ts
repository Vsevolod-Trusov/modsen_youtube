import styled from 'styled-components';

const StyledInput = styled('input')(({ theme }) => ({
  width: '570px',
  height: '38px',
  border: `1px solid ${theme.colors.gray}`,
  padding: '5px 15px',
  outline: 'none',
  background: theme.colors.lightGray,
  fontFamily: 'Roboto',
  fontSize: '14px',
  fontWeight: '400',
  lineHeight: '16px',

  '&:hover': {
    border: `1px solid ${theme.colors.darkGray}`,
    background: theme.colors.gray,
    transition: '.1s',
  },
  '&:focus': {
    background: theme.colors.white,
    borderColor: theme.colors.darkGray,
    transition: '.1s',
  },

  [`@media ${theme.breakpoints.sm}`]: {
    width: '100%',
  },
}));

export { StyledInput };
