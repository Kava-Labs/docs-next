import Header from './Header';
import LeftNav from './LeftNav';
import RightNav from './RightNav';
import Footer from './Footer';
import Doc from './Doc';
import { useEffect, useState } from 'react';
import { renderToString } from 'react-dom/server';
import { Box } from './library';
import transformHtml from '../helpers/transformHtml';
import { useMediaQuery, useTheme } from '@material-ui/core';

function Main({ children }) {
  const theme = useTheme();
  const isMobile = !useMediaQuery(theme.breakpoints.up('md'));

  const [html, setHtml] = useState('');
  const [internalNavLinks, setInternalNavLinks] = useState([]);

  useEffect(() => {
    const { html, internalNavLinks } = transformHtml(renderToString(children));
    setHtml(html);
    setInternalNavLinks(internalNavLinks);
  }, [children]);

  return (
    <>
      <Header />
      <Box display="flex">
        {isMobile ? <></> : <LeftNav />}
        <Doc html={html} />
        <RightNav internalNavLinks={internalNavLinks} />
      </Box>
      <Footer />
    </>
  );
}

export default Main;
