import {
  ButtonClassKey,
  ContainerClassKey,
  PaperClassKey,
} from '@material-ui/core';
import { StyleRules } from '@material-ui/core/styles';
import { CSSProperties } from '@material-ui/styles/withStyles';

import { Overrides } from '@material-ui/core/styles/overrides';
import { ShapeOptions } from '@material-ui/core/styles/shape';
import { Palette } from '@material-ui/core/styles/createPalette';
import { Shadows } from '@material-ui/core/styles/shadows';

/**
 * @description because this accepts the palette, we do not need to make a separate override for dark and light themes
 */
export const createOverrides = ({
  palette,
  shadows,
  shape,
}: {
  palette: Palette;
  shadows: Shadows;
  shape: ShapeOptions;
}) => {
  const cssBaselineOverride = {
    '@global': {
      a: {
        textDecoration: 'none',
        color: 'inherit',
      },
      '@font-face': [
        // fonts didn;t work
      ] as unknown as CSSProperties,
    },
  };

  const buttonOverride: Partial<StyleRules<ButtonClassKey>> = {
    contained: {
      padding: '13px 8px',
      minWidth: '195px',
      backgroundColor: palette?.primary?.main,
      color: palette.background.paper,
      '&:disabled': {
        background: palette.text.disabled,
        color: palette.background.paper,
      },
      '&:hover': {
        backgroundColor: palette.primary.dark,
        color:
          palette.type === 'dark'
            ? palette.text.primary
            : palette.background.paper,
      },
    },
    sizeSmall: {
      minWidth: '155px',
      height: '31px',
    },
    outlined: {
      color: palette.primary.main,
      borderColor: palette.primary.main,
      borderWidth: '2px',
      padding: '6px 8px',
      transition: 'background-color 200ms ease-in-out, color 200ms ease-in-out',
      '&:hover': {
        backgroundColor: palette.primary.main,
        color: 'white',
      },
    },
    text: {
      padding: 0,
      color: palette.text.primary,
      '&:hover': {
        backgroundColor: 'transparent',
        color: palette.primary.main,
      },
    },
    label: { padding: '4px 0' },
    root: { minWidth: 0 },
  };

  const containerOverride: Partial<StyleRules<ContainerClassKey>> = {
    root: {
      paddingLeft: '8px',
      paddingRight: '8px',
    },
  };

  const paperOverride: Partial<StyleRules<PaperClassKey>> = {
    root: {
      borderRadius: shape.borderRadius, // default 8px
      backgroundColor: palette.background.paper,
      boxShadow: shadows[1],
    },
  };

  const overrides: Overrides = {
    MuiCssBaseline: cssBaselineOverride,
    MuiButton: buttonOverride,
    MuiPaper: paperOverride,
    MuiContainer: containerOverride,
  };
  return overrides;
};
