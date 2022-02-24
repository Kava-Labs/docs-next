const withPlugins = require('next-compose-plugins');
const gsm = require("remark-gfm");


const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  
  options: {
    remarkPlugins: [gsm],
  }
});

const mdx = withMDX({
  pageExtensions: ['js','ts','tsx','md', 'jsx', 'mdx'],
})
module.exports = withPlugins([
  [mdx]
]);
