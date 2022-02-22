const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
})
module.exports = withMDX({
  pageExtensions: ['js','ts','tsx','md', 'jsx', 'mdx'],
})