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

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('css')
  eleventyConfig.addPassthroughCopy('img')
    return {
        passthroughFileCopy: true
    };
};
