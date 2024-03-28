import { styled } from 'styled-components';

const StyledFooterContainer = styled('div')(({ theme }) => ({
  height: '299px',
  flexShrink: '0',
  padding: '65px 10px 10px 53px',
  borderTop: `2px solid ${theme.colors.gray}`,
}));

export { StyledFooterContainer };
