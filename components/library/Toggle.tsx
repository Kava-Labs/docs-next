import { makeStyles } from '@material-ui/core';

import { useState } from 'react';
import { Box, Button, ButtonFont, ButtonProps, H4 } from './index';

const useToggleButtonStyles = makeStyles({
  root: {
    width: '50%',
    minWidth: '50%', // override default min width
  },
});
interface ToggleButtonProps extends ButtonProps {
  isSelected: boolean;
  outlined?: boolean;
}

export const ToggleButton = (props: ToggleButtonProps) => {
  const classes = useToggleButtonStyles();
  const { isSelected, outlined, ...remainingProps } = props;
  let variant: ButtonProps['variant'];
  if (outlined) variant = isSelected ? 'outlined' : 'text';
  else variant = isSelected ? 'contained' : undefined;
  return (
    <Button
      disableRipple
      disableFocusRipple
      {...remainingProps}
      className={classes.root}
      variant={variant}
    >
      {outlined ? (
        <ButtonFont color={isSelected ? 'inherit' : 'textSecondary'}>
          {props.children}
        </ButtonFont>
      ) : (
        <H4 color={isSelected ? 'inherit' : 'textSecondary'}>
          {props.children}
        </H4>
      )}
    </Button>
  );
};

const useToggleStyles = makeStyles(({ palette, spacing, shape }) => {
  return {
    root: {
      width: '100%',
      backgroundColor: palette.background.default,
      padding: spacing(1),
      display: 'flex',
      borderRadius: shape.borderRadius,
      color: palette.primary.main,
    },
  };
});

export interface ToggleProps {
  leftText: string;
  rightText: string;
  leftOption: string;
  rightOption: string;
  onSelect: (selectedOption: string) => unknown;
  initialOption?: string;
  outlined?: boolean;
}

/**
 * @param {boolean} outlined whether to display as larger toggle buttons (with H4 font big buttons), or the tab switcher style (with normal button font and outlined buttons)
 * @example 
 * <Toggle
  leftText="Swap View"
  rightText="Liquidity View"
  leftOption="swap"
  rightOption="liquidity"
  initialOption="liquidity"
  onSelect={(option) => doSomethingWithOption(option)}
/>;
 */
export const Toggle = ({
  leftText,
  rightText,
  leftOption,
  rightOption,
  initialOption,
  onSelect,
  outlined = false,
}: ToggleProps) => {
  const classes = useToggleStyles();
  const [selected, setSelected] = useState(
    initialOption ? initialOption : leftOption
  );
  const handleSelect = (option: typeof leftOption | typeof rightOption) => {
    if (selected !== option) {
      setSelected(option);
      onSelect(option);
    }
  };
  return (
    <Box className={classes.root}>
      <ToggleButton
        outlined={outlined}
        onClick={() => handleSelect(leftOption)}
        isSelected={selected === leftOption}
      >
        {leftText}
      </ToggleButton>
      <ToggleButton
        outlined={outlined}
        onClick={() => handleSelect(rightOption)}
        isSelected={selected === rightOption}
      >
        {rightText}
      </ToggleButton>
    </Box>
  );
};

export default Toggle;
