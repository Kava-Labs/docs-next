import { Box, Link } from './library';
import { H3 } from './library/Typography';
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
        <H3>On This Page</H3>
        {internalNavLinks.map(({ title, id }, key) => {
          return (
            <Link key={key} href={'#' + id}>
              {title}
            </Link>
          );
        })}
      </Box>
    </>
  );
}

export default RightNav;
