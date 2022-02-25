import Header from './Header';
import LeftNav from './LeftNav';
import RightNav from './RightNav';
import Footer from './Footer';
import Doc from './Doc';
import { useEffect, useState } from 'react';
import { renderToString } from 'react-dom/server';
import { Box } from './library';
import transformHtml from '../helpers/transformHtml';

function Main({ children }) {
  const [html, setHtml] = useState('');
  const [tableOfContents, setTableOfContents] = useState([]);

  useEffect(() => {
    const { html, tableOfContents } = transformHtml(renderToString(children));
    setHtml(html);
    setTableOfContents(tableOfContents);
  }, [children]);

  return (
    <>
      <Header />
      <Box display="flex">
        <LeftNav />
        <Doc html={html} />
        <RightNav tableOfContents={tableOfContents} />
      </Box>
      <Footer />
    </>
  );
}

export default Main;
