import { styled } from 'styled-components';

const StyledHeaderContainer = styled('div')({
  height: '120px',
  backgroundColor: 'transprent',
  flexShrink: '0',
});

const StyledHeaderWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100%',
});

export { StyledHeaderContainer, StyledHeaderWrapper };
