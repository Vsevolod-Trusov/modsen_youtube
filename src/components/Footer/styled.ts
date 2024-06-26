import { styled } from 'styled-components';

const StyledFooterContainer = styled('footer')(({ theme }) => ({
  height: '299px',
  flexShrink: '0',
  padding: '65px 10px 10px 53px',
  borderTop: `2px solid ${theme.colors.gray}`,

  [`@media ${theme.breakpoints.sm}`]: {
    padding: '20px',

    height: '350px',
  },
}));

const StyledFooterWrapper = styled('div')({
  display: 'flex',
  width: '100%',
  height: '100%',
  flexDirection: 'column',
});

export { StyledFooterContainer, StyledFooterWrapper };
