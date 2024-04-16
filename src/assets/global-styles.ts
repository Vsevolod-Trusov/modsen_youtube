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

   @keyframes hover_item_animation {
   0% {
      background-color: ${(props) => props.theme.colors.darkThemeWhite || props.theme.colors.lightGray};
   }
   100% {
      background-color: ${(props) => props.theme.colors.gray};
   }

   @keyframes hover_scroll_animation {
      0% {
         background-color: ${(props) => props.theme.colors.orange};
      }
      100% {
         background-color: ${(props) => props.theme.colors.darkOrange};
      }
}
   `;

export default getGlobalStyles;
