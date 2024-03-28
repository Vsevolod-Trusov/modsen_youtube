import { styled } from 'styled-components';

const StyledContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  flexBasis: '25%',
  padding: '20px 12px',

  '&:hover': {
    background: theme.colors.gray,
    transition: '.1s',
  },
  '&:active': {
    background: theme.colors.darkGray,
    transition: '.1s',
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

const StyledAuthorSection = styled('div')({
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
});

const StyledTitle = styled('h3')({
  fontSize: '16px',
});

const StyledSubTitle = styled('span')({
  fontSize: '14px',
  wordSpacing: '3px',
  padding: '2px',
});

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
