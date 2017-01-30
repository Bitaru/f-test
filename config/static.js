import ExtractTextPlugin from 'extract-text-webpack-plugin';
import { defaultRules } from './default';

const rules = {
  ...defaultRules,
  localCss: {
    loader: ExtractTextPlugin.extract({
      fallbackLoader: 'style-loader',
      loader: 'css-loader?localIdentName=[hash:5]&modules&minimize=true&importLoaders=1!postcss-loader'
    })
  },

  globalCss: {
    loader: ExtractTextPlugin.extract({
      fallbackLoader: 'style-loader',
      loader: 'css-loader?minimize=true&importLoaders=1!postcss-loader'
    })
  },

  js: {
    use: [
      {
        loader: 'babel-loader',
        options: {
          babelrc: false,
          plugins: [
            'react-hot-loader/babel',
            'react-require'
          ],
          presets: [
            ['es2015', { modules: false }],
            'stage-0',
            'react'
          ]
        }
      }
    ]
  }
};

export default {
  rules,
  filename: '[name].js',
  entry: [
    './src/Root/index.js'
  ],
  output: {
    libraryTarget: 'commonjs2'
  },
  target: 'node',
  node: {
    process: false,
    __filename: false,
    __dirname: false,
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'styles.css',
      disable: false,
      allChunks: true
    })
  ]
};
