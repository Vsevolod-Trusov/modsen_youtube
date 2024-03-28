import { styled } from 'styled-components';

const StyledContainer = styled('div')({
  display: 'flex',
  height: '100%',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  columnGap: '5px',
});

const StyledImageWrapper = styled('div')({
  width: '28px',
  height: '20px',
});

const StyledLogoText = styled('span')({
  fontFamily: 'Roboto',
  fontSize: '18px',
  fontWeight: '700',
  lineHeight: '21px',
});

export { StyledContainer, StyledImageWrapper, StyledLogoText };
