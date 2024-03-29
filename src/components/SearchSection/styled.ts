import { styled } from 'styled-components';

const StyledContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  width: '100%',
  justifyContent: 'center',
  flex: '0.5',
  padding: '0 5px',

  [`@media ${theme.breakpoints.sm}`]: {
    padding: '20px 10px',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap',
    rowGap: '20px',
  },
}));

const HideContainer = styled('div')(({ theme }) => ({
  [`@media ${theme.breakpoints.sm}`]: {
    display: 'none',
  },
}));

const StyledSearchSection = styled(HideContainer)({
  width: '100%',
});

const ShowContainer = styled('div')(({ theme }) => ({
  display: 'none',

  [`@media ${theme.breakpoints.sm}`]: {
    display: 'flex',
  },
}));

const StyledSearchShowContainer = styled(ShowContainer)({
  width: '100%',
});

export {
  HideContainer,
  ShowContainer,
  StyledContainer,
  StyledSearchSection,
  StyledSearchShowContainer,
};
