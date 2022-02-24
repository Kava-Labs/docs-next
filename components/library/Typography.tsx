import {
  Typography as MUITypography,
  TypographyProps as MUITypographyProps,
} from '@material-ui/core';
import { CSSProperties } from 'react';
import theme from '../../../webapp/src/theme';

type CustomProps = {
  lineHeight?: number;
  marginLeft?: number;
  marginRight?: number;
  marginBottom?: number;
  marginTop?: number;
  textTransform?: CSSProperties['textTransform'];
};

export type BaseTypographyProps = MUITypographyProps & CustomProps;
export type TypographyProps = Omit<BaseTypographyProps, 'style'>;

export type TypographyElement = (props: TypographyProps) => JSX.Element;

/** multiply margins by theme's spacing factor */
const makeInlineStyles: (props: CustomProps) => CSSProperties = ({
  lineHeight,
  marginLeft,
  marginRight,
  marginBottom,
  marginTop,
  textTransform,
}: CustomProps) => {
  let styles: CSSProperties = {
    lineHeight,
    marginLeft: marginLeft ? theme.spacing(marginLeft) : undefined,
    marginRight: marginRight ? theme.spacing(marginRight) : undefined,
    marginBottom: marginBottom ? theme.spacing(marginBottom) : undefined,
    marginTop: marginTop ? theme.spacing(marginTop) : undefined,
    textTransform,
  };
  return styles;
};

/**
 *
 * @param props
 * @returns props minus the style props
 * @description Our custom style props cannot be passed down like other props without causing errors, so they need to be filtered out.
 */
const filterProps: (props: TypographyProps) => MUITypographyProps = (
  props: TypographyProps
) => {
  const {
    lineHeight,
    marginLeft,
    marginRight,
    marginBottom,
    marginTop,
    textTransform,
    ...rest
  } = props;
  return { ...rest, color: props.color ?? 'textPrimary' };
};

export const H1: TypographyElement = (props) => (
  <MUITypography
    {...filterProps(props)}
    style={makeInlineStyles(props)}
    variant="h1"
  />
);
export const H2: TypographyElement = (props) => (
  <MUITypography
    {...filterProps(props)}
    style={makeInlineStyles(props)}
    variant="h2"
  />
);
export const H3: TypographyElement = (props) => (
  <MUITypography
    {...filterProps(props)}
    style={makeInlineStyles(props)}
    variant="h3"
  />
);
export const H4: TypographyElement = (props) => (
  <MUITypography
    {...filterProps(props)}
    style={makeInlineStyles(props)}
    variant="h4"
  />
);
export const H5: TypographyElement = (props) => (
  <MUITypography
    {...filterProps(props)}
    style={makeInlineStyles(props)}
    variant="h5"
  />
);
export const H6: TypographyElement = (props) => (
  <MUITypography
    {...filterProps(props)}
    style={makeInlineStyles(props)}
    variant="h6"
  />
);

export const Body1: TypographyElement = (props) => (
  <MUITypography
    {...filterProps(props)}
    style={makeInlineStyles(props)}
    variant="body1"
  />
);
export const Body2: TypographyElement = (props) => (
  <MUITypography
    {...filterProps(props)}
    style={makeInlineStyles(props)}
    variant="body2"
  />
);
export const ButtonFont: TypographyElement = (props) => (
  <MUITypography
    {...filterProps(props)}
    style={makeInlineStyles(props)}
    variant="button"
  />
);
export const Subtitle1: TypographyElement = (props) => (
  <MUITypography
    {...filterProps(props)}
    style={makeInlineStyles(props)}
    variant="subtitle1"
  />
);
export const Subtitle2: TypographyElement = (props) => (
  <MUITypography
    {...filterProps(props)}
    style={makeInlineStyles(props)}
    variant="subtitle2"
  />
);
export const Caption: TypographyElement = (props) => (
  <MUITypography
    {...filterProps(props)}
    style={makeInlineStyles(props)}
    variant="caption"
  />
);

export const Overline: TypographyElement = (props) => (
  <MUITypography
    {...filterProps(props)}
    style={makeInlineStyles(props)}
    variant="overline"
  />
);

export const Typography = {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Body1,
  Body2,
  ButtonFont,
  Subtitle1,
  Subtitle2,
  Caption,
  Overline,
};
export { Typography as MUITypography } from '@material-ui/core';
