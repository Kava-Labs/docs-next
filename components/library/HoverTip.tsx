import { makeStyles, Tooltip, TooltipProps } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  hoverTip: {
    cursor: 'pointer',
  },
  tooltip: { maxWidth: 165, textAlign: 'center' },
}));
interface Props extends TooltipProps {
  title: string;
}

export const HoverTip = ({
  title,
  children,
  enterTouchDelay = 10,
  placement = 'top',
  ...props
}: Props) => {
  const classes = useStyles();

  return (
    <Tooltip
      title={title}
      enterTouchDelay={enterTouchDelay}
      placement={placement}
      className={classes.hoverTip}
      classes={{ tooltip: classes.tooltip }}
      {...props}
    >
      {children}
    </Tooltip>
  );
};

export default HoverTip;
