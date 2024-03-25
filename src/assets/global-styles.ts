import { createGlobalStyle } from 'styled-components';

const getGlobalStyles = () => createGlobalStyle`
      *,
      *::before,
      *::after {
         margin: 0;
         padding: 0;
         box-sizing: border-box;
      }
   `;

export default getGlobalStyles;
