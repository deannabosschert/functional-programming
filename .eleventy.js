// const dataDingen = require('./src/app.js')

module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy({'src/assets/css': 'assets/css'})
  eleventyConfig.addPassthroughCopy({'src/assets/img': 'assets/img'})
  eleventyConfig.addPassthroughCopy({'src/app.js': 'app.js'})
  eleventyConfig.addPassthroughCopy({'lib': 'lib'})
  eleventyConfig.addPassthroughCopy({'src/data': 'data'})

  return {
    dir: {
      input: 'src',
      output: 'docs'
    },
    templateFormats: ['html', 'md', '11ty.js'],
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    passthroughFileCopy: true
  }
}
