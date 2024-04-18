import { styled } from 'styled-components';

import { DISPLAY_FLEX } from '@/constants';

const StyledWrapper = styled('div')(({ theme }) => ({
  position: 'relative',
  ...DISPLAY_FLEX,
  background: theme.colors.darkThemeBackground || theme.colors.lightGray,
}));

export { StyledWrapper };
