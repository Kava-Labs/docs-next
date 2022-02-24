const gsm = require("remark-gfm");

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  
  options: {
    remarkPlugins: [gsm],
  }
});

module.exports = withMDX({
  pageExtensions: ['js','ts','tsx','md', 'jsx', 'mdx'],
});