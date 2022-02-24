import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import { Tooltip, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  icon: {
    fontSize: 16,
    marginLeft: 2,
    color: 'inherit',
  },
  tooltip: { maxWidth: 165 },
}));

interface Props {
  title?: string;
  id: string;
  ariaLabel?: string;
}

export const ToolTip = ({ title, id, ariaLabel }: Props) => {
  const classes = useStyles();

  return title ? (
    <Tooltip
      title={title}
      id={id}
      aria-label={ariaLabel ?? 'tooltip for ' + id}
      enterTouchDelay={10}
      placement="top"
      classes={{ tooltip: classes.tooltip }}
    >
      <InfoOutlinedIcon id={id} className={classes.icon} />
    </Tooltip>
  ) : null;
};
