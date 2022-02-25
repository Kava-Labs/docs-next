import { CustomThemeProvider } from '../styles/ThemeToggle';

function DocsApp({ Component, pageProps }) {
  return (
    <CustomThemeProvider>
      <Component {...pageProps} />
    </CustomThemeProvider>
  );
}

export default DocsApp;
