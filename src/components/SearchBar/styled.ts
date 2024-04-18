import { styled } from 'styled-components';

const StyledSearchSection = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100%',
});

const StyledSearchWrapper = styled('div')({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const StyledSearchImageWrapper = styled('div')({
  display: 'flex',
  width: '80%',
});

export { StyledSearchImageWrapper, StyledSearchSection, StyledSearchWrapper };
