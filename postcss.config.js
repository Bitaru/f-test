const { compact } = require('lodash');

module.exports = ctx => ({
  plugins: compact([
    require('postcss-smart-import'),
    require('postcss-font-magician'),
    require('postcss-for'),
    require('postcss-mixins'),
    require('postcss-focus'),
    require('postcss-nested'),
    require('postcss-color-function'),
    require('postcss-css-variables'),
    require('postcss-input-range'),
    ctx.development && require('postcss-reporter')({ clearReportedMessages: true }),
    require('autoprefixer')
  ])
});
