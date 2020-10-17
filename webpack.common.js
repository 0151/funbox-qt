const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const fs = require('fs')

const getPublicUrlOrPath = require('react-dev-utils/getPublicUrlOrPath')
const appDirectory = fs.realpathSync(process.cwd())
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath)

const publicUrlOrPath = getPublicUrlOrPath(
  process.env.NODE_ENV === 'development',
  require(resolveApp('package.json')).homepage,
  process.env.PUBLIC_URL
)

module.exports = {
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].bundle.js',
    publicPath: publicUrlOrPath,
  },
  resolve: {
    modules: ['node_modules', path.join(__dirname, 'src')],
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              //name: '[name].[ext]',
              outputPath: 'fonts/',
            },
          },
        ],
      },
      {
        test: [/\.png$/, /\.jpe?g$/],
        use: {
          loader: 'file-loader',
          options: {
            outputPath: 'media',
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html',
      title: 'Funbox QT',
    }),
  ],
}
