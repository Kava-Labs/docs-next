import { makeStyles } from '@material-ui/core';

import Theme from './index';
import { Body2, Box, H1, MUITypography } from 'components/library';

const useStyles = makeStyles(({ palette, spacing }) => {
  return {
    root: {
      background: palette.background.default,
      padding: spacing(6),
    },
    bottomMargin: {
      marginBottom: spacing(6),
    },
    fontSample: {
      width: '320px',
      height: '140px',
      display: 'flex',
      flexDirection: 'column',
      paddingRight: spacing(6),
    },
    description: { textDecoration: 'underline', marginBottom: '8px' },
  };
});
const fontWeights: any = {
  '300': 'Light',
  '400': 'Regular',
  '500': 'Medium',
  '600': 'Semi-Bold',
  '700': 'Bold',
};
const fontsWithoutNames = [
  {
    name: '',
    sample: 'Heading 1',
    variant: 'h1',
  },
  {
    name: '',
    sample: 'Heading 2',
    variant: 'h2',
  },
  {
    name: '',
    sample: 'Heading 3',
    variant: 'h3',
  },
  {
    name: '',
    sample: 'Heading 4',
    variant: 'h4',
  },
  {
    name: '',
    sample: 'Heading 5',
    variant: 'h5',
  },
  {
    name: '',
    sample: 'Heading 6',
    variant: 'h6',
  },
  {
    name: '',
    sample:
      'Paragraph – Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a gravida velit, eget efficitur libero. Sed sit amet pulvinar risus. Suspendisse potenti.',
    variant: 'body1',
  },
  {
    name: '',
    sample:
      'Paragraph – Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a gravida velit, eget efficitur libero. Sed sit amet pulvinar risus. Suspendisse potenti.',
    variant: 'body2',
  },
  {
    name: '',
    sample: 'Button / Nav Text',
    variant: 'button',
  },
  {
    name: '',
    sample: 'Subtitle 1 - 2 DAYS',
    variant: 'subtitle1',
  },
  {
    name: '',
    sample: 'Subtitle 2 Text',
    variant: 'subtitle2',
  },

  {
    name: '',
    sample: 'Caption - Chart Labels',
    variant: 'caption',
  },
];

const remToPx = (remString: string) => {
  console.log({ remString });
  const remVal = Number(remString.split('rem')[0]);
  const converted = remVal * Theme.typography.fontSize;
  console.log({ remString, remVal, converted });
  return converted;
};
const addFontNames = (
  fonts: typeof fontsWithoutNames,
  themeTypography: any
) => {
  const fontVariants = fonts.map((font) => font.variant);
  Object.keys(themeTypography).forEach((key) => {
    console.log({ key });
    if (!fontVariants.includes(key)) return;
    else {
      fonts.forEach((font) => {
        if (font.variant === key) {
          font.name = `${key.toUpperCase()} - ${
            themeTypography[key].fontFamily
          } ${fontWeights[themeTypography[key].fontWeight]} ${remToPx(
            themeTypography[key].fontSize
          )}px (${themeTypography[key].fontSize})`;
        }
      });
    }
  });
  return fonts;
};

const _Typography = () => {
  const fonts = addFontNames(fontsWithoutNames, Theme.typography);
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <H1 className={classes.bottomMargin}>Typography</H1>
      <Box className={classes.bottomMargin}>
        <Box display="flex" flexWrap="wrap">
          {fonts.map((font) => {
            return (
              <Box className={classes.fontSample}>
                <Body2 color="textSecondary" className={classes.description}>
                  {font.name}
                </Body2>
                <MUITypography variant={font.variant as any}>
                  {font.sample}
                </MUITypography>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default _Typography;
