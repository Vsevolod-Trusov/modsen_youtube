import { styled } from 'styled-components';

const StyledContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  flexBasis: '25%',
  maxWidth: '332px',
  padding: '20px 12px',

  '&:hover': {
    background: theme.colors.gray,
    transition: '.1s',
  },
  '&:active': {
    background: theme.colors.darkGray,
    transition: '.1s',
  },

  [`@media ${theme.breakpoints.sm}`]: {
    flexBasis: '100%',
  },
}));

const StyledPreviewSection = styled('div')({
  display: 'flex',
  width: '100%',
});

const StyledDescriptionSection = styled('div')({
  display: 'flex',
  width: '100%',
  flexGrow: 0,
  columnGap: '15px',
  padding: '15px 0',
});

const StyledAuthorSection = styled('div')(({ theme }) => ({
  display: 'flex',
  width: '100%',
  height: '100%',
  justifyContent: 'center',
  flexDirection: 'column',
  rowGap: '5px',
  marginTop: '10px',
  fontFamily: 'Roboto',
  fontWeight: 500,
  lineHeight: '18px',

  [`@media ${theme.breakpoints.sm}`]: {
    marginTop: 0,
  },
}));

const StyledTitle = styled('h3')(({ theme }) => ({
  fontSize: '16px',

  [`@media ${theme.breakpoints.sm}`]: {
    fontSize: '14px',
    fontWeight: 400,
  },
}));

const StyledSubTitle = styled('span')(({ theme }) => ({
  fontSize: '14px',
  wordSpacing: '3px',
  padding: '2px',

  [`@media ${theme.breakpoints.sm}`]: {
    fontWeight: 400,
  },
}));

const StyledAvatarContainer = styled('div')({
  position: 'relative',
  display: 'flex',
  flexBasis: '15%',
  width: '100%',
});

const StyledAvatar = styled('img')({
  position: 'absolute',
  width: '100%',
});

export {
  StyledAuthorSection,
  StyledAvatar,
  StyledAvatarContainer,
  StyledContainer,
  StyledDescriptionSection,
  StyledPreviewSection,
  StyledSubTitle,
  StyledTitle,
};
