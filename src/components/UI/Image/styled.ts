import { styled } from 'styled-components';

const StyledImage = styled('img')(({ theme }) => ({
  display: 'flex',
  width: '80%',
  color: theme.colors.lightGray,
}));

export { StyledImage };
