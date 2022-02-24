import { createGlobalStyle, DefaultTheme } from 'styled-components'

// example global style
export const lightTheme : DefaultTheme = {
   body: '#fffff',
   text: '#000000',
};

// global css styles 
export const GlobalStyles = createGlobalStyle`
* {
   box-sizing: border-box;
}
body {
   margin: 0;
   padding: 0;
   background: ${({ theme }) => theme.body};
   color: ${({ theme }) => theme.text};
}
`;