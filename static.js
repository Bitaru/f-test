const { renderToStaticMarkup } = require('react-dom/server');
const bundle = require('./build/main.js').default;
const fs = require('fs');
const copy = require('copy');
const html = renderToStaticMarkup(bundle());

copy(['./build/**.css', './build/**.png'], './docs', () => {
  fs.writeFileSync('./docs/index.html', `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <meta name="mobile-web-app-capable" content="yes">
        <title>f-test</title>
        <link rel="stylesheet" type="text/css" href="styles.css">
      </head>
      <body>
        ${html}
      </body>
    </html>
  `);
});
