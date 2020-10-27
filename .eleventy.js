// const dataDingen = require('./src/app.js')

// module.exports = (eleventyConfig) => {
//   eleventyConfig.addPassthroughCopy({'public/css': 'assets/css'})
//   eleventyConfig.addPassthroughCopy({'public/img': 'assets/img'})
//   eleventyConfig.addPassthroughCopy({'lib': 'lib'})
//
//   return {
//     dir: {
//       input: 'views',
//       output: 'docs'
//     },
//     templateFormats: ['html', 'ejs', 'md', '11ty.js'],
//     htmlTemplateEngine: 'ejs',
//     markdownTemplateEngine: 'ejs',
//     passthroughFileCopy: true
//   }
// }

module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy('assets/fonts')
  eleventyConfig.addPassthroughCopy('assets/img')
  return {
    dir: {
      input: 'src',
      data: '_data',
      includes: '_includes',
      output: '_site'
    },
    templateFormats: ['html', 'ejs'],
    htmlTemplateEngine: 'ejs',
    markdownTemplateEngine: 'ejs',
    passthroughFileCopy: true
  }
};
