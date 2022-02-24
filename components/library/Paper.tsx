import React from 'react';
import { BoxProps, makeStyles } from '@material-ui/core';
import { Box } from '.';
export interface CustomPaperProps extends BoxProps {
  largeRadius?: boolean;
}

const useStyles = makeStyles(({ palette, shadows, shape }) => ({
  customPaper: {
    borderRadius: (props: CustomPaperProps) =>
      props.largeRadius ? '14px' : shape.borderRadius,
    backgroundColor: palette.background.paper,
    boxShadow: shadows[1],
  },
}));

/**
 *
 * @param {boolean} largeRadius whether to use the default small 8px borderRadius or the large 14px one
 * @description A simpler approximation of the MUI Paper component more fit for our design system, that also exposes the <Box> props.
 */
export const Paper = React.forwardRef<HTMLDivElement, CustomPaperProps>(
  (props, ref) => {
    const { largeRadius, ...filteredProps } = props;
    const classes = useStyles({ largeRadius });
    return (
      <Box
        ref={ref}
        {...filteredProps}
        className={`${classes.customPaper} ${props.className}`}
      >
        {props.children}
      </Box>
    );
  }
);
