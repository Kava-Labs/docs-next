import SocialLinks from "./SocialLinks";
import Brand from "./Brand";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(({ spacing }) => ({
  headerWrapper: {
    backgroundColor: "grey",
    height: "50px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
}));

function Header() {
  const classes = useStyles();
    return (
      <header className={classes.headerWrapper}>
        <div style={{'marginLeft': '24px'}}>
          <Brand />
        </div>
        <div style={{'display': 'flex', 'marginRight': '24px', 'alignItems': 'center'}}>
          <SocialLinks />
        </div>
      </header>
    );
}

export default Header;

