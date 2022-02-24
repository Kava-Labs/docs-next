import { makeStyles } from '@material-ui/core';
import { Box, H1, H2, H3, H4 } from 'components/library';

const useStyles = makeStyles(({ palette, spacing }) => {
  return {
    root: {
      padding: spacing(8),
      background: palette.background.default,
    },
    bottomMargin: {
      marginBottom: spacing(6),
    },
    colorSample: {
      marginRight: spacing(3),
      background: palette.background.paper,
      marginBottom: spacing(6),
      borderRadius: '38px',
      boxShadow: '0px 32px 64px rgba(17, 17, 17, 0.08)',
    },
    colorSampleSplotch: {
      width: '397px',
      height: '220px',
      borderRadius: '32px',
    },
    descWrapper: {
      height: '140px',
      width: '360px',
      display: 'flex',
      flexDirection: 'column',
      paddingLeft: '30px',
      justifyContent: 'center',
    },
    _textPrimary: { backgroundColor: palette.text.primary },
    _textSecondary: { backgroundColor: palette.text.secondary },
    _textDisabled: { backgroundColor: palette.text.disabled },
    _grey300: { backgroundColor: palette.grey[300] },
    _grey200: { backgroundColor: palette.grey[200] },
    _backgroundDefault: { backgroundColor: palette.background.default },
    _backgroundPaper: { backgroundColor: palette.background.paper },
    _primary: { backgroundColor: palette.primary.main },
    _primaryDark: { backgroundColor: palette.primary.dark },
    _secondary: { backgroundColor: palette.secondary.main },
    _error: { backgroundColor: palette.error.main },
    _warning: { backgroundColor: palette.warning.main },
  };
});

type Greys =
  | '_textPrimary'
  | '_textSecondary'
  | '_textDisabled'
  | '_grey300'
  | '_grey200'
  | '_backgroundDefault'
  | '_backgroundPaper';

const greys: { name: string; description: string; color: Greys }[] = [
  {
    name: 'Black, Text Primary',
    description: 'Titles and body text.',
    color: '_textPrimary',
  },
  {
    name: 'Text Secondary',
    description: 'Labels',
    color: '_textSecondary',
  },
  {
    name: 'Text Disabled',
    description: 'Disabled text/fields and footer nav.',
    color: '_textDisabled',
  },
  {
    name: 'Grey 300',
    description: 'Borrow limits/sliders.',
    color: '_grey300',
  },
  {
    name: 'Grey 200',
    description: 'Expand button, network fee.',
    color: '_grey200',
  },
  {
    name: 'Background Default',
    description: 'Background.',
    color: '_backgroundDefault',
  },
  {
    name: 'Background Paper',
    description: 'Modal Background.',
    color: '_backgroundPaper',
  },
];

type ColorsType =
  | '_primary'
  | '_primaryDark'
  | '_secondary'
  | '_error'
  | '_warning';

const colors: { name: string; description: string; color: ColorsType }[] = [
  {
    name: 'Primary',
    description: '',
    color: '_primary',
  },
  {
    name: 'Primary Dark',
    description: 'Hover',
    color: '_primaryDark',
  },
  {
    name: 'Secondary ',
    description: '',
    color: '_secondary',
  },
  {
    name: 'Error ',
    description: '',
    color: '_error',
  },
  {
    name: 'Warning ',
    description: '',
    color: '_warning',
  },
];
const palette: { [key: string]: typeof colors | typeof greys } = {
  greys,
  colors,
};

const Colors = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <H1 className={classes.bottomMargin}>Colors</H1>
      {Object.keys(palette).map((subSection, index) => {
        return (
          <Box className={classes.bottomMargin}>
            <H2 textTransform="capitalize" className={classes.bottomMargin}>
              {Object.keys(palette)[index]}
            </H2>
            <Box display="flex" flexWrap="wrap">
              {palette[subSection].map((color) => {
                return (
                  <Box className={classes.colorSample}>
                    <Box
                      className={`${classes.colorSampleSplotch} ${
                        classes[color.color]
                      }`}
                    ></Box>
                    <Box className={classes.descWrapper}>
                      <H3>{color.name}</H3>
                      <H4 color="textSecondary" marginTop={8}>
                        {color.description}
                      </H4>
                    </Box>
                  </Box>
                );
              })}
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default Colors;
