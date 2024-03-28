import { styled } from 'styled-components';

const StyledContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  width: '50%',
  height: '100%',
  fontFamily: 'Roboto',
  fontSize: '20px',
  fontWeight: 500,
  lineHeight: '23px',
});

const StyledText = styled('span')({
  wordSpacing: '3px',
});

const StyledMetadataSection = styled('div')({
  display: 'flex',
  width: '100%',
  height: '100%',
});

const StyledLinksContainer = styled('div')({
  width: '100%',
});

const StyledIconButtonsWrapper = styled('div')({
  display: 'flex',
  justifyContent: 'flex-end',
  columnGap: '30px',
  width: '100%',
});

export {
  StyledContainer,
  StyledIconButtonsWrapper,
  StyledLinksContainer,
  StyledMetadataSection,
  StyledText,
};
