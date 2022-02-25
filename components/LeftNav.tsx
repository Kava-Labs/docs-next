import { makeStyles } from '@material-ui/core';
import { Box } from './library';

const useStyles = makeStyles(({ palette }) => ({
  leftNav: {
    backgroundColor: palette.grey[200],
  },
  listItem: {
    margin: '6px',
  },
}));

function LeftNav() {
  const classes = useStyles();

  return (
    <>
      <Box width="15%" className={classes.leftNav}>
        <li className={classes.listItem}>Intro to Kava Network</li>
        <li className={classes.listItem}>Develop on Ethereum</li>
        <li className={classes.listItem}>Develop on Cosmos</li>
        <li className={classes.listItem}>Participate in Network</li>
      </Box>
    </>
  );
}

export default LeftNav;
