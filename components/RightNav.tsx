import { Box, Link } from './library';
import { H3 } from './library/Typography';

type Props = {
  toc: { title: string; id: string }[];
};
function RightNav({ toc }: Props) {

  return (
    <>
      <Box display="flex" flexDirection="column">
        <H3>Table</H3>
        {toc.map(({ title, id }, key) => {
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
