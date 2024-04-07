import { createGlobalStyle } from 'styled-components';

const getGlobalStyles = () => createGlobalStyle`
      *,
      *::before,
      *::after {
         margin: 0;
         padding: 0;
         box-sizing: border-box;
      }

      @keyframes skeleton_animation {
      0% {
         transform: translateX(-100%);
      }
     
       100% {
         transform: translateX(100%);
      }
   }
   `;

export default getGlobalStyles;
