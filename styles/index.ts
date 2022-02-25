import {
  Palette,
  PaletteOptions,
} from '@material-ui/core/styles/createPalette';
import { createTheme } from '@material-ui/core/styles';
import { TypographyOptions } from '@material-ui/core/styles/createTypography';
import { Shadows } from '@material-ui/core/styles/shadows';

import { createOverrides } from './overrides';
import { BreakpointsOptions } from '@material-ui/core/styles/createBreakpoints';


export * from './ThemeWrapper';

const palette: PaletteOptions = {
  primary: {
    main: '#534EFF',
    dark: '#342FDD',
  },
  secondary: {
    main: '#06D6A0',
  },
  error: {
    main: '#BF0A30',
  },
  warning: {
    main: '#FFA329',
  },
  background: {
    default: '#FAF9F8',
    paper: '#FFFFFF',
  },
  text: {
    primary: '#1E1E1E',
    secondary: '#7A8386',
    disabled: '#B4B9BB',
  },
  grey: {
    '200': '#EEEEEE',
    '300': '#E0E0E0',
  },
};

const paletteDark: PaletteOptions = {
  type: 'dark',
  primary: {
    main: '#A0B5FF',
    dark: '#534EFF',
  },
  secondary: {
    main: '#3EDBB2',
  },
  error: {
    main: '#F06683',
  },
  warning: {
    main: '#FEB657',
  },
  background: {
    default: '#1E1E1E',
    paper: '#2D2D2D',
  },
  text: {
    primary: '#EEEEEE',
    secondary: '#B4B9BB',
    disabled: '#4B4B4B',
  },
  grey: {
    '200': '#3A3A3A',
    '300': '#E0E0E0',
  },
};

export const typography: TypographyOptions = {
  htmlFontSize: 16,
  fontFamily: 'Inter, sans-serif',
  fontSize: 16,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
  h1: {
    fontWeight: 700,
    fontSize: 55 / 16 + 'rem', // 55px
    lineHeight: 60 / 55, // 60px
  },
  h2: {
    fontWeight: 700,
    fontSize: 40 / 16 + 'rem', // 40px
    lineHeight: 48 / 40, // 48px
  },
  h3: {
    fontWeight: 500,
    fontSize: 22 / 16 + 'rem', // 22px
    lineHeight: 27 / 22, // 27px
  },
  h4: {
    fontWeight: 500,
    fontSize: 19 / 16 + 'rem', // 19px
    lineHeight: 23 / 19, // 23px
  },
  h5: {
    fontWeight: 500,
    fontSize: 16 / 16 + 'rem', // 16px
    lineHeight: 19 / 16, // 19px
  },
  h6: {
    fontWeight: 400,
    fontSize: 15 / 16 + 'rem', // 15px
    lineHeight: 18 / 15, // 18px
  },
  subtitle1: {
    fontWeight: 700,
    fontSize: 12 / 16 + 'rem', // 12px
    lineHeight: 14 / 12, // 14px
    textTransform: 'uppercase',
  },
  subtitle2: {
    fontWeight: 500,
    fontSize: 13 / 16 + 'rem', // 13px
    lineHeight: 16 / 13, // 16px
  },
  body1: {
    fontWeight: 400,
    fontSize: 13 / 16 + 'rem', // 13px
    lineHeight: 18 / 13, // 18px
  },
  body2: {
    fontWeight: 400,
    fontSize: 11 / 16 + 'rem', // 11px
    lineHeight: 13 / 11, // 13px
  },
  button: {
    fontWeight: 600,
    fontSize: 15 / 16 + 'rem', // 15px
    lineHeight: 18 / 15, // 18px
    textTransform: 'none',
  },
  caption: {
    fontWeight: 500,
    fontSize: 12 / 16 + 'rem', // 12px
    lineHeight: 20 / 12, // 18px
  },
  // Only MUI default we aren't using. Keeping this as a reminder it will be a good one to reach for if we need to add one.
  // overline: {
  //   fontWeight: 400,
  //   fontSize: '0.75rem',
  //   lineHeight: 48 / 40,
  //   textTransform: 'uppercase',
  // },
};

export const shadows: Shadows = [
  'none', // shadows[0] - No shadow
  '3px 3px 40px rgba(0, 0, 0, 0.05)', // shadows[1] - Small shadow
  '0 4px 2px -2px rgba(0, 0, 0, 0.05)', // bottom shaddow
  '', // unused slots
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
];

export const shadowsDark: Shadows = [...shadows];

shadowsDark[1] = '3px 3px 40px rgba(0, 0, 0, 0.4)';

export const shape = {
  borderRadius: 8,
};
export const spacing = 8;

const breakpoints: BreakpointsOptions = {
  values: { xs: 0, sm: 600, md: 900, lg: 1118, xl: 1536 },
};

export const theme = createTheme({
  palette,
  typography,
  shadows,
  shape,
  spacing,
  breakpoints,
  overrides: createOverrides({ palette: palette as Palette, shape, shadows }),
});

export const darkTheme = createTheme({
  palette: paletteDark,
  typography,
  shadows: shadowsDark,
  shape,
  spacing,
  breakpoints,
  overrides: createOverrides({
    palette: paletteDark as Palette,
    shape,
    shadows: shadowsDark,
  }),
});

export default theme;
