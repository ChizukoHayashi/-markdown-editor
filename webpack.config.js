const path = require('path')

module.exports = {
    entry: './src/index.tsx',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx'],
    },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    publicPath: 'auto',
  },
  devServer: {
    historyApiFallback: true,
    static: {
        directory: path.join(__dirname, '/dist/'),
        },
    hot:true,
    open:true,
  }
}