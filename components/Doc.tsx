import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles(({ spacing }) => ({
  doc: {
    width: '70%',
    padding: spacing(1),
    paddingLeft: spacing(3),
  },
}));

type Props = {
  html: string;
};

function Doc({ html }: Props) {
  const classes = useStyles();

  return (
    <>
      <main
        className={classes.doc}
        dangerouslySetInnerHTML={{ __html: html }}
      ></main>
    </>
  );
}

export default Doc;
