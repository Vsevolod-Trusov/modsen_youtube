import { styled } from 'styled-components';

const StyledContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flex: '0.5',
  flexWrap: 'wrap',
  width: '100%',
  height: '100%',
  paddingLeft: '20px',
  borderTop: `2px solid ${theme.colors.gray}`,
  borderBottom: `2px solid ${theme.colors.gray}`,

  [`@media ${theme.breakpoints.sm}`]: {
    maxHeight: '40%',
    paddingLeft: '10px',
    border: 'none',
    justifyContent: 'flex-start',
  },
}));

const StyledWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  columnGap: '5px',

  [`@media ${theme.breakpoints.sm}`]: {
    alignItems: 'flex-start',
    rowGap: '5px',
  },
}));

export { StyledContainer, StyledWrapper };
