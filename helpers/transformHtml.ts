type TransformedHTML = {
  html: string;
  tableOfContents: { title: string; id: string }[];
};

// a bit complex but performant
// we build the string as we go time O(N) space O(N  + (headerContentLength * num of header tags))
// note the nested loop is not going to cause this to be O(N^2)
// because before we break out we increment i by how far we got with j similar to how sliding window works

export default function transformHtml(htmlString: string): TransformedHTML {
  let transformedHTML = '';
  let currentTag = '';

  const tableOfContents: { title: string; id: string }[] = [];

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
            tableOfContents.push({
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
    tableOfContents: tableOfContents,
  };
}
