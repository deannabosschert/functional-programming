module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy('assets/fonts')
  eleventyConfig.addPassthroughCopy('assets/img')
  eleventyConfig.addPassthroughCopy({'src/lib/d3-charts.js': 'd3-charts.js'})

  return {
    dir: {
      input: 'src',
      data: '_data',
      includes: '_includes',
      output: '_site'
    },
    templateFormats: ['html', 'njk'],
    htmlTemplateEngine: 'njk',
    passthroughFileCopy: true
  }
}
