import { PALETTE, SIZES } from '@/constants';

const DEFAULT_THEME = {
  hoverAnimationDuration: '0.3s',
  colors: {
    ...PALETTE,
    white: '#fff',
    lightGray: '#f0f0f0',
  },
  skeletonAnimationBackground: '240, 240, 240',
  breakpoints: {
    sm: `(max-width: ${SIZES.sm})`,
  },
};

export { DEFAULT_THEME, SIZES };
