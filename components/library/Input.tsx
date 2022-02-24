import {
  InputAdornment,
  makeStyles,
  TextField,
  TextFieldProps,
} from '@material-ui/core';
import { ChangeEvent, ForwardedRef, forwardRef } from 'react';
import { Box, H4, H6 } from '.';
import { InputHelperText } from '../../../webapp/src/components';

export type InputProps = TextFieldProps & {
  adornment?: string | JSX.Element;
  hasError?: boolean;
  hasWarning?: boolean;
  'data-testid'?: string;
  adornmentPosition?: 'start' | 'end';
  helperText?: string;
  secondLine?: boolean;
  greyOut?: boolean;
  readOnly?: boolean;
  ref?: ForwardedRef<HTMLInputElement>;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

interface StyleProps {
  small: boolean;
  hasError: boolean;
  hasWarning: boolean;
  secondLine?: boolean;
  fullWidth?: boolean;
  greyOut?: boolean;
  readOnly?: boolean;
}
const useInputStyles = makeStyles(({ palette, typography }) => ({
  root: ({ small, greyOut, readOnly, fullWidth }: StyleProps) => {
    let width;
    let background = palette.background.paper;

    if (small) {
      if (!fullWidth) width = '70px';
    }

    if (greyOut) {
      background = palette.background.default;
    }
    return {
      borderRadius: '8px',
      background,
      width,
    };
  },
  inputRoot: ({
    small,
    hasError,
    hasWarning,
    secondLine,
    greyOut,
    readOnly,
  }: StyleProps) => {
    let height = '64px';
    let padding = '20px 16px';
    let border = '1px solid';
    let borderColor = 'transparent';
    let hoverBorderColor = palette.primary.main;

    if (small) {
      height = '36px';
      padding = '10px 12px';
      borderColor = palette.text.disabled;
    }
    if (hasWarning) {
      hoverBorderColor = palette.warning.main;
      borderColor = palette.warning.main;
    }
    if (hasError) {
      hoverBorderColor = palette.error.main;
      borderColor = palette.error.main;
    }
    let justifyContent = 'center';
    let display;
    let flexDirection;
    let alignItems;
    if (secondLine) {
      display = 'flex';
      flexDirection = 'column' as any; // MUI bug, not accepting string
      justifyContent = 'flex-start';
      padding = '8px 16px';
      alignItems = 'flex-start';
    }

    let background = palette.background.paper;
    if (greyOut) {
      background = palette.grey[200];
      border = 'none';
    }

    if (readOnly) {
      border = 'none';
    }

    return {
      '&.Mui-focused': {
        border,
        background,
        borderColor,
      },
      '&:hover': { borderColor: hoverBorderColor, border },
      '&::before': { display: 'none' }, // removes underline
      '&::after': { display: 'none' }, // removes underline
      borderRadius: '8px',
      background,
      height,
      padding,
      border,
      borderColor,
      justifyContent,
      display,
      flexDirection,
      alignItems,
    };
  },

  input: ({ small, hasError, hasWarning }: StyleProps) => {
    let color = palette.text.primary;
    if (hasWarning) color = palette.warning.main;
    if (hasError) color = palette.error.main;
    let typeStyle = typography.h4;

    if (small) {
      typeStyle = typography.h6;
    }

    return {
      color,
      ...typeStyle,
    };
  },
  inputAdornment: ({ hasError, hasWarning }: StyleProps) => {
    let color = palette.text.primary;
    if (hasWarning) color = palette.warning.main;
    if (hasError) color = palette.error.main;

    return {
      color,
    };
  },
}));

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      variant = 'standard',
      autoComplete = 'off',
      hasError = false,
      hasWarning = false,
      adornmentPosition = 'end',
      onChange,
      size,
      adornment,
      helperText,
      children,
      secondLine,
      fullWidth,
      greyOut,
      readOnly,
      ...props
    },
    ref
  ) => {
    if (secondLine) adornmentPosition = 'start';
    const small = size === 'small';
    const classes = useInputStyles({
      small,
      hasError,
      hasWarning,
      secondLine,
      fullWidth,
      greyOut,
      readOnly,
    });

    let helperTextType: 'default' | 'error' | 'warning' = 'default';
    if (hasWarning) helperTextType = 'warning';
    if (hasError) helperTextType = 'error';

    return (
      <Box flexGrow={1} display="flex" flexDirection="column">
        <TextField
          onChange={onChange}
          data-testid={props['data-testid']}
          data-has-warning={hasWarning}
          data-has-error={hasError}
          variant={variant}
          inputRef={ref}
          autoComplete={autoComplete}
          classes={{ root: classes.root }}
          InputProps={{
            readOnly,
            classes: { root: classes.inputRoot, input: classes.input },
            inputProps: { 'aria-label': props.id },
            endAdornment: adornment && (
              <InputAdornment
                classes={{ root: classes.inputAdornment }}
                position={adornmentPosition}
              >
                {small && <H6 color="inherit">{adornment}</H6>}
                {!small && <H4 color="inherit">{adornment}</H4>}
              </InputAdornment>
            ),
          }}
          {...props}
        >
          {children}
        </TextField>
        {helperText && (
          <InputHelperText
            marginLeft={2}
            type={helperTextType}
            text={helperText}
            justify="flex-start"
          />
        )}
      </Box>
    );
  }
);

export default Input;
