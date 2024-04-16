import { SIZES } from './default';

const BLACK_THEME = {
  hoverAnimationDuration: '0.3s',
  colors: {
    black: '#000',
    darkThemeWhite: '#fff',
    gray: '#d2d2d2',
    darkThemeBackground: '#4e4e56',
    toggleButton: '#f0b849',
    darkGray: '#8b8a8a',
    orange: '#ff8a00',
    darkOrange: '#b76403',
    lightOrange: '#f7921c',
  },
  skeletonAnimationBackground: '78, 78, 86',
  breakpoints: {
    sm: `(max-width: ${SIZES.sm})`,
  },
};

export { BLACK_THEME };
