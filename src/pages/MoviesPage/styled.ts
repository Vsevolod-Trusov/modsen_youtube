import { styled } from 'styled-components';

import { DISPLAY_FLEX } from '@/contants';

const StyledWrapper = styled('div')(({ theme }) => ({
  ...DISPLAY_FLEX,
  background: theme.colors.darkThemeBackground || theme.colors.lightGray,
}));

export { StyledWrapper };
