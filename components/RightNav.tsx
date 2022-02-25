import { Box, H5, H6, Link } from './library';
import { InternalNavLink } from '../types';
import { useMediaQuery, useTheme } from '@material-ui/core';

type Props = {
  internalNavLinks: InternalNavLink[];
};

function RightNav({ internalNavLinks }: Props) {
  const theme = useTheme();
  const isMobile = !useMediaQuery(theme.breakpoints.up('md'));

  return isMobile ? (
    <>
      <div style={{ backgroundColor: 'lightgrey', height: 'fit-content' }}>
        On this page
      </div>
    </>
  ) : (
    <>
      <Box display="flex" flexDirection="column">
        <H5>On This Page</H5>
        {internalNavLinks.map(({ title, id }, key) => {
          return (
            <Link style={{ margin: '5px' }} key={key} href={'#' + id}>
              <H6 color="textSecondary"> {title}</H6>
            </Link>
          );
        })}
      </Box>
    </>
  );
}

export default RightNav;
