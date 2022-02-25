import SocialLinks from './SocialLinks';
import Brand from './Brand';
import { makeStyles, useMediaQuery, useTheme } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  desktopHeaderWrapper: {
    backgroundColor: 'white',
    height: '91px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  mobileHeaderWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    marginLeft: '24px',
  },
  linksWrapper: {
    display: 'flex',
    marginRight: '24px',
    alignItems: 'center',
  },
}));

function Header() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = !useMediaQuery(theme.breakpoints.up('md'));

  return isMobile ? (
    <header className={classes.mobileHeaderWrapper}>
      <Brand />
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div>Hamburger</div>
        <div>Table of Contents</div>
        <SocialLinks />
      </div>
    </header>
  ) : (
    <header className={classes.desktopHeaderWrapper}>
      <div style={{ marginLeft: '24px' }}>
        <Brand />
      </div>
      <div className={classes.linksWrapper}>
        <SocialLinks />
      </div>
    </header>
  );
}

export default Header;
