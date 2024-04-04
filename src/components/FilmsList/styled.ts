import { styled } from 'styled-components';

const StyledFilmsContainer = styled('div')({
  display: 'flex',
  width: '100%',
  height: '100%',
  justifyContent: 'space-between',
  columnGap: '1%',
  flexWrap: 'wrap',
});

const StyledScrollButtonContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  padding: '35px 0px',
});

export { StyledFilmsContainer, StyledScrollButtonContainer };
