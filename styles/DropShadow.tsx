import { makeStyles } from '@material-ui/core';
import { Box, H1 } from 'components/library';

const useStyles = makeStyles(({ spacing, palette, shape, shadows }) => {
  return {
    root: {
      background: palette.background.default,
      padding: spacing(6),
    },
    bottomMargin: {
      marginBottom: spacing(6),
    },
    sample: {
      boxShadow: shadows[1], // Apply shadow here!

      borderRadius: shape.borderRadius,
      backgroundColor: palette.background.paper,
      display: 'flex',
      padding: spacing(2),
    },
  };
});
const Dropshadow = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <H1 className={classes.bottomMargin}>Dropshadow</H1>
      <Box className={classes.sample}> </Box>
    </Box>
  );
};

export default Dropshadow;
