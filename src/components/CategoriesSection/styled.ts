import { styled } from 'styled-components';

const StyledContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flex: '0.5',
  flexWrap: 'wrap',
  width: '100%',
  height: '100%',
  paddingLeft: '6%',
  borderTop: `2px solid ${theme.colors.gray}`,
  borderBottom: `2px solid ${theme.colors.gray}`,
}));

const StyledWrapper = styled('div')({
  display: 'flex',
  columnGap: '5px',
});

export { StyledContainer, StyledWrapper };
