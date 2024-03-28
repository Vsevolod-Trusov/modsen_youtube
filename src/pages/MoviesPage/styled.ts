import { styled } from 'styled-components';

const StyledWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  background: theme.colors.lightGray,
}));

const StyledFilmsContainer = styled('div')({
  display: 'flex',
  width: '100%',
  height: '100%',
  justifyContent: 'center',
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

const StyledFooterWrapper = styled('div')({
  display: 'flex',
  width: '100%',
  height: '100%',
  flexDirection: 'column',
});

export {
  StyledFilmsContainer,
  StyledFooterWrapper,
  StyledScrollButtonContainer,
  StyledWrapper,
};
