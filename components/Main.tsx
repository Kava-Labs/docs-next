import Header from "./Header";
import LeftNav from "./LeftNav";
import RightNav from "./RightNav";
import Footer from "./Footer";
import Doc from "./Doc";
import { createStyles, makeStyles } from "@material-ui/core";
import { useEffect } from "react";

// brings it all together in this case children will be the mardown file
// markdown file will be rendered inside the Doc Component which is a seperate "container" for the mdx file to keep
// the code more atomic and loosely coupled

const useStyles = makeStyles((theme) =>
  createStyles({
    mainWrapper: {
      display: "flex",
      flexDirection: "column",
      height: "100%",
      margin: 0,
    },
    contentWrapper: {
      display: "flex",
      justifyContent: "space-between",
    },
  })
);

function Main({ children }) {
  const classes = useStyles();

  return (
    <>
      <div className={classes.mainWrapper}>
        <Header />
        <div className={classes.contentWrapper}>
          <LeftNav />
          <Doc>{children}</Doc>
          <RightNav />
        </div>

        <Footer />
      </div>
    </>
  );
}

export default Main;
