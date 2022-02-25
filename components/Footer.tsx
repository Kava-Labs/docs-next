import { createStyles, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => (
  createStyles({
      footerWrapper: {
          height: '40px',
          backgroundColor: 'grey',
      },
  })));

function Footer() {
    const classes = useStyles();
    return <footer className={classes.footerWrapper}>Previous | Next</footer>;
}

export default Footer;
