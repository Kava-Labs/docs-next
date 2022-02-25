import { createContext, FC } from 'react';

import {
  Box,
  CssBaseline,
  Theme,
  ThemeProvider,
  useTheme,
} from '@material-ui/core';

import lightTheme from './index';

export type ThemeType = 'dark' | 'light';
const kavaThemeKey = 'kava-theme';

export interface ThemeContextProps {
  themeType: ThemeType;
  toggleTheme: () => void;
}

export const CustomThemeContext = createContext<ThemeContextProps>({
  themeType: 'light',
  toggleTheme: () => null,
});

export const CustomThemeProvider: FC = ({ children }) => {
  // const { themeType, toggleTheme, theme } = useThemeToggle();
  return (
    <CustomThemeContext.Provider
      value={{ themeType: 'light', toggleTheme: () => {} }}
    >
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CustomThemeContext.Provider>
  );
};

/**
 * @summary For use in storybook. Wraps children in theme with a toggler button on top
 * @description For now only used for stories and previewing, but lays down a good example for the actual integration.
 * @param props.children a component to wrap
 * @example <ThemeToggle><H1 color="primary">my color will be toggled</H1></ThemeToggle>
 */
export const ThemeToggle: FC = ({ children }) => {
  return (
    <CustomThemeProvider>
      <ThemeBackground>{children}</ThemeBackground>
    </CustomThemeProvider>
  );
};

/** Sometimes storybook fails at setting the background color. wrapping with this helps. */
export const ThemeBackground: React.FC = (props) => {
  const theme = useTheme<Theme>();
  return (
    <Box style={{ backgroundColor: theme.palette.background.default }}>
      {props.children}
    </Box>
  );
};
