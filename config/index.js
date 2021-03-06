import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const environments = ['development', 'production', 'test', 'dll', 'static'];

const getEnvironment = env =>
  env && environments.find(e => !!env[e]) || process.env.NODE_ENV || 'development';


export default (env) => {
  const environment = getEnvironment(env);
  const environmentConfig = require(`./${environment}.js`); // eslint-disable-line

  if (typeof environmentConfig === 'function') return environmentConfig(env);
  const { rules, filename, publicPath, ...config } = environmentConfig;

  return {
    ...config,
    resolve: {
      modules: [
        path.join(process.cwd(), 'src'),
        'node_modules'
      ]
    },
    entry: [
      ...config.entry,
      // './src/index.js'
    ],

    output: {
      ...config.output,
      path: path.resolve(process.cwd(), 'build'),
      filename: filename || '[name].[hash].js',
      publicPath,
    },

    module: {
      noParse: /\.min\.js/,
      rules: [
        {
          ...rules.localCss,
          test: /^((?!global).)*\.css/
        },
        {
          ...rules.globalCss,
          test: /\.global\.css/
        },
        {
          ...rules.js,
          test: /\.js$/,
          exclude: /node_modules/
        },
        {
          ...rules.raw,
          test: /\.svg$/
        },
        {
          ...rules.font,
          test: /\.(eot|ttf|woff|woff2)$/
        },
        {
          ...rules.image,
          test: /\.(jpg|png|gif)$/
        }
      ]
    },

    plugins: [
      ...config.plugins,
      new webpack.DefinePlugin({
        ...environments
          .reduce((acc, key) => ({ ...acc, [`__${key.toUpperCase()}__`]: environments[key] }), {}),
        'process.env': {
          NODE_ENV: JSON.stringify('production')
        }
      }),

      new HtmlWebpackPlugin({
        title: 'R-test',
        inject: true,
        template: 'src/index.html'
      })
    ]
  };
};
