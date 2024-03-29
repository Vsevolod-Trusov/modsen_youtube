import { styled } from 'styled-components';

const StyledContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '35px',
  height: '100%',
});

const StyledButton = styled('button')(({ theme }) => ({
  display: 'flex',
  border: 'none',
  outline: 'none',

  '&:active': {
    outline: 'none',
    background: theme.colors.gray,
    transparent: '.1s',
  },
}));

export { StyledButton, StyledContainer };
