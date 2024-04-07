const SIZES = {
  sm: '780px',
};

const DEFAULT_THEME = {
  colors: {
    black: '#000',
    white: '#fff',
    gray: '#d2d2d2',
    lightGray: '#f0f0f0',
    darkGray: '#8b8a8a',
    orange: '#ff8a00',
    darkOrange: '#b76403',
    lightOrange: '#f7921c',
  },
  skeletonAnimationBackground: '240, 240, 240',
  breakpoints: {
    sm: `(max-width: ${SIZES.sm})`,
  },
};

export { DEFAULT_THEME, SIZES };
