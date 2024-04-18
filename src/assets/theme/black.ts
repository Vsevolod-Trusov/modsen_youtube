import { PALETTE, SIZES } from '@/constants';

const BLACK_THEME = {
  hoverAnimationDuration: '0.3s',
  colors: {
    ...PALETTE,
    darkThemeWhite: '#fff',
    darkThemeBackground: '#4e4e56',
    toggleButton: '#f0b849',
  },
  skeletonAnimationBackground: '78, 78, 86',
  breakpoints: {
    sm: `(max-width: ${SIZES.sm})`,
  },
};

export { BLACK_THEME };
