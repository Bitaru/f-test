export const defaultRules = {
  raw: {
    use: ['raw-loader']
  },

  image: {
    use: [
      {
        loader: 'file-loader',
        options: {
          name: '[hash:base64:5].[ext]',
        }
      },
      {
        loader: 'image-webpack-loader',
        options: {
          progressive: true
        }
      }
    ]
  },
};
