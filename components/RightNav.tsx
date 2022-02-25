import { Box, Link } from './library';
import { H3 } from './library/Typography';
import { InternalNavLink } from '../types';

type Props = {
  internalNavLinks: InternalNavLink[];
};

function RightNav({ internalNavLinks }: Props) {
  return (
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
