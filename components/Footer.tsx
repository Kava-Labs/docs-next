import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  footerWrapper: {
    height: '40px',
    display: 'flex',
    justifyContent: 'space-evenly',
  },
}));

function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.footerWrapper}>
      <div>Previous</div>
      <div>Next</div>
    </footer>
  );
}

export default Footer;
