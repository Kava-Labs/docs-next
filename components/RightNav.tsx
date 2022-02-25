import { Box, Link } from './library';
import { H3 } from './library/Typography';

type Props = {
  tableOfContents: { title: string; id: string }[];
};
function RightNav({ tableOfContents }: Props) {
  return (
    <>
      <Box display="flex" flexDirection="column">
        <H3>Table</H3>
        {tableOfContents.map(({ title, id }, key) => {
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
