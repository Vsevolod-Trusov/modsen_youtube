import styled from 'styled-components';

import { FONT_FAMILY, HOVER_SCROLL_ANIMATION } from '@/constants';

const StyledButton = styled('button')(({ theme }) => ({
  width: '192px',
  height: '52px',
  borderRadius: '10px',
  border: 'none',
  backgroundColor: theme.colors.orange,
  color: theme.colors.darkThemeWhite || theme.colors.white,
  ...FONT_FAMILY,
  fontSize: '22px',
  fontWeight: '700',
  lineHeight: '26px',
  textAlign: 'center',

  '&:hover': {
    backgroundColor: theme.colors.darkOrange,
    ...HOVER_SCROLL_ANIMATION,
    transition: '.5s',
  },

  '&:active': {
    backgroundColor: theme.colors.lightOrange,
    transition: '.1s',
  },

  [`@media ${theme.breakpoints.sm}`]: {
    width: '230px',
    height: '32px',
    fontSize: '16px',
  },
}));

export { StyledButton };
