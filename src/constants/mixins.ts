import { css, CSSProperties, DefaultTheme } from 'styled-components';

const DISPLAY_FLEX: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
};
const FONT_FAMILY: CSSProperties = {
  fontFamily: 'Roboto',
};
const HOVER_ANIMATION: (theme: DefaultTheme) => CSSProperties = (
  theme: DefaultTheme,
) => ({
  cursor: 'pointer',
  animation: `hover_item_animation ${theme.hoverAnimationDuration} linear`,
});
const HOVER_SCROLL_ANIMATION: (theme: DefaultTheme) => CSSProperties = (
  theme: DefaultTheme,
) => ({
  cursor: 'pointer',
  animation: `hover_scroll_animation ${theme.hoverAnimationDuration} linear`,
});
const INIT_PROPERTIES = css`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;
const SKELETON_ANIMATION_KEYFRAMES = css`
  @keyframes skeleton_animation {
    0% {
      transform: translateX(-100%);
    }

    100% {
      transform: translateX(100%);
    }
  }
`;
const HOVER_BUTTON_KEYFRAMES = css`
@keyframes hover_item_animation {
  0% {
     background-color: ${(props) => props.theme.colors.darkThemeWhite || props.theme.colors.lightGray};
  }
  100% {
     background-color: ${(props) => props.theme.colors.gray};
  }`;

const SCROLL_BUTTON_KEYFRAMES = css`
  @keyframes hover_scroll_animation {
    0% {
      background-color: ${(props) => props.theme.colors.orange};
    }
    100% {
      background-color: ${(props) => props.theme.colors.darkOrange};
    }
  }
`;

export {
  DISPLAY_FLEX,
  FONT_FAMILY,
  HOVER_ANIMATION,
  HOVER_BUTTON_KEYFRAMES,
  HOVER_SCROLL_ANIMATION,
  INIT_PROPERTIES,
  SCROLL_BUTTON_KEYFRAMES,
  SKELETON_ANIMATION_KEYFRAMES,
};
