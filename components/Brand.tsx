import { H3 } from './library';
import Logo from './Logo';
import { useMediaQuery, useTheme } from '@material-ui/core';

function Brand() {
  const theme = useTheme();
  const isMobile = !useMediaQuery(theme.breakpoints.up('md'));

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div style={{ marginRight: '10px' }}>
        <Logo />
      </div>
      {!isMobile && <H3 color="textSecondary">| Developer Docs</H3>}
    </div>
  );
}

export default Brand;
