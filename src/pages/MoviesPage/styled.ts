import { styled } from 'styled-components';

const StyledWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  background: theme.colors.lightGray,
}));

export { StyledWrapper };
