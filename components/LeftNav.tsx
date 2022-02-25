import { makeStyles } from '@material-ui/core';
import { Box } from './library';

const useStyles = makeStyles(({ palette }) => ({
  leftNav: {
    backgroundColor: palette.grey[200],
  },
}));

function LeftNav() {
  const classes = useStyles();

  return (
    <>
      <Box width="15%" className={classes.leftNav}>
        <li>Intro to Kava Network</li>
        <li>Develop on Ethereum</li>
        <li>Develop on Cosmos</li>
        <li>Participate in Network</li>
      </Box>
    </>
  );
}

export default LeftNav;
