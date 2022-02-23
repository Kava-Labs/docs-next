import {ThemeProvider} from 'styled-components';
import {GlobalStyles, lightTheme} from '../styles/theme.config';

function Docs({ Component, pageProps }) {
  return <ThemeProvider theme={lightTheme}>
    <GlobalStyles />
    <Component {...pageProps}/>
  </ThemeProvider>
}

export default Docs;
