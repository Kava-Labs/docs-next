import { createGlobalStyle } from 'styled-components'

// example global styles 

export const lightTheme = {
   body: '#fffff',
};


export const GlobalStyles = createGlobalStyle`
* {
   box-sizing: border-box;
}
body {
   margin: 0;
   padding: 0;
   background: ${({ theme }) => theme.body};
   color: ${({ theme }) => theme.text};
}`