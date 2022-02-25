import Header from './Header';
import LeftNav from './LeftNav';
import RightNav from './RightNav';
import Footer from './Footer';
import Doc from './Doc';
import { useEffect, useState } from 'react';
import { renderToString } from 'react-dom/server';
import { Box } from './library';

function Main({ children }) {
  const [html, setHtml] = useState('');
  const [toc, setToc] = useState([]);

  useEffect(() => {
    const { html, toc } = transformHtml(renderToString(children));
    setHtml(html);
    setToc(toc);
  }, [children]);

  return (
    <>
      <Header />
      <Box display="flex">
        <LeftNav />
        <Doc html={html} />
        <RightNav toc={toc} />
      </Box>
      <Footer />
    </>
  );
}

type TransformedHTML = {
  html: string;
  toc: { title: string; id: string }[];
};

// a bit complex but performant
// we build the string as we go time O(N) space O(N  + (headerContentLength * num of header tags))
// note the nested loop is not going to cause this to be O(N^2)
// because before we break out we increment i by how far we got with j similar to how sliding window works

function transformHtml(htmlString: string): TransformedHTML {
  let transformedHTML = '';
  let currentTag = '';

  const tableOfContent: { title: string; id: string }[] = [];

  for (let i = 0; i < htmlString.length; i++) {
    const currChar = htmlString.charAt(i);
    const nextChar = htmlString.charAt(i + 1);
    transformedHTML += currChar;

    if (currChar === '<' && nextChar === 'h') {
      currentTag += currChar;
      continue;
    }

    if (currentTag.length) {
      currentTag += currChar;
      if (
        currentTag === '<h1' ||
        currentTag === '<h2' ||
        currentTag === '<h3'
      ) {
        let titleContent = '';
        let titleId = '';
        let j = i + 1;
        while (j < htmlString.length) {
          const contentChar = htmlString.charAt(j);
          if (contentChar === '>') {
            j++;
            continue;
          }

          if (contentChar !== '<') {
            titleContent += contentChar;
            titleId += contentChar === ' ' ? '_' : contentChar;
          } else {
            tableOfContent.push({
              title: titleContent,
              id: titleId,
            });

            transformedHTML += ` id="${titleId}">${titleContent}`;
            currentTag = '';
            // we don't need the parent loop to go over what j went over so we will skip since we already
            // built that text and added an Id into transformedHTML
            i = j - 1;
            break;
          }

          j++;
        }
      }
    }
  }
  return {
    html: transformedHTML,
    toc: tableOfContent,
  };
}

export default Main;
