import { styled } from 'styled-components';

import { FONT_FAMILY, HOVER_ANIMATION } from '@/constants';

const StyledFilterButton = styled('button')(({ theme }) => ({
  width: 'auto',
  padding: '8px 20px',
  borderRadius: '15px',
  border: `2px solid ${theme.colors.gray}`,
  backgroundColor: theme.colors.lightGray,
  ...FONT_FAMILY,
  fontWeight: '400',
  fontSize: '14px',
  lineHeight: '16.41px',
  textAlign: 'center',
  color: theme.colors.black,

  '&:hover': {
    backgroundColor: theme.colors.gray,
    cursor: 'pointer',
    ...HOVER_ANIMATION(theme),
  },
  '&:active': {
    backgroundColor: theme.colors.black,
    color: theme.colors.darkThemeWhite || theme.colors.white,
    border: `2px solid ${theme.colors.black}`,
    transition: '.1s',
  },
}));

const StyledSelectedCategoryButton = styled(StyledFilterButton)(
  ({ theme }) => ({
    backgroundColor: theme.colors.black,
    color: theme.colors.darkThemeWhite || theme.colors.white,
    border: `2px solid ${theme.colors.black}`,

    '&:hover': {
      border: `2px solid ${theme.colors.gray}`,
      color: theme.colors.black,
      ...HOVER_ANIMATION(theme),
    },

    '&:active': {
      backgroundColor: theme.colors.black,
      color: theme.colors.darkThemeWhite || theme.colors.white,
      border: `2px solid ${theme.colors.black}`,
      transition: '.1s',
    },
  }),
);

export { StyledFilterButton, StyledSelectedCategoryButton };
