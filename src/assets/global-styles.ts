import { createGlobalStyle } from 'styled-components';

import {
  HOVER_BUTTON_KEYFRAMES,
  INIT_PROPERTIES,
  SCROLL_BUTTON_KEYFRAMES,
  SKELETON_ANIMATION_KEYFRAMES,
} from '@/contants';

const getGlobalStyles = () => createGlobalStyle`
     ${INIT_PROPERTIES}
      ${SKELETON_ANIMATION_KEYFRAMES}
      ${HOVER_BUTTON_KEYFRAMES}
      ${SCROLL_BUTTON_KEYFRAMES}
   `;

export { getGlobalStyles };
