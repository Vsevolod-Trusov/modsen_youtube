import styled from 'styled-components';

const StyledLabel = styled('label')({
  position: 'relative',
  display: 'inline-block',
  width: '49px',
  height: '25px',
});

const StyledInput = styled('input')({
  display: 'none',

  '&:checked + span:before': {
    transform: 'translateX(25px)',
  },
});

const StyledSpan = styled('span')(({ theme }) => ({
  position: 'absolute',
  cursor: 'pointer',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: theme.colors.white,
  borderRadius: '20px',
  border: `2px solid ${theme.colors.orange}`,

  '&:before': {
    position: 'absolute',
    top: -2,
    left: -2,
    content: '""',
    height: '25px',
    width: '25px',
    borderRadius: '15px',
    zIndex: 2,
    border: `2px solid ${theme.colors.orange}`,
    backgroundColor: theme.colors.white,
    transition: '.2s',
  },
}));

const StyledToggleContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100%',
});

export { StyledInput, StyledLabel, StyledSpan, StyledToggleContainer };
