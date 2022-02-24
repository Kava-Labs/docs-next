import { Box as MUIBox, BoxProps } from '@material-ui/core';
import React from 'react';

// TODO: remove this and all forwardRef nastiness when upgrading to MUI v5
declare module '@material-ui/core/Box' {
  interface BoxProps {
    ref?: React.ForwardedRef<HTMLDivElement>;
  }
}

export const Box = React.forwardRef<HTMLDivElement, BoxProps>((props, ref) => (
  <MUIBox ref={ref} {...props}>
    {props.children}
  </MUIBox>
));
