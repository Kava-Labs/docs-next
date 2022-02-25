import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(({ spacing }) => ({
  footerWrapper: {
    height: '40px',
    backgroundColor: 'grey',
  },
}));


function Footer() {
    const classes = useStyles();
    return <footer className={classes.footerWrapper}>Previous | Next</footer>;
}

export default Footer;
