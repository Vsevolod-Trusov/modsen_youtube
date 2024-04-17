import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(3px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
`;

const PopupContent = styled('div')(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.colors.darkThemeBackground || theme.colors.lightGray,
  padding: '10px 5px',
  borderRadius: '5px',
  width: '80%',
  height: '60%',
}));

const CloseButton = styled('button')(({ theme }) => ({
  color: theme.colors.darkThemeWhite || theme.colors.black,
  backgroundColor: 'transparent',
  border: 'none',
  fontSize: '20px',
  cursor: 'pointer',
  position: 'absolute',
  top: '5px',
  right: '10px',
}));

const StyledFrameWrapper = styled('div')({
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const StyledFrame = styled('iframe')({
  width: '95%',
  height: '90%',
  border: 'none',
});

export { CloseButton, Overlay, PopupContent, StyledFrame, StyledFrameWrapper };
