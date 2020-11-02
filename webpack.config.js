const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'vue-table-export.js',
    path: path.resolve(__dirname, 'dist'),
    // library指定的就是你使用require时的模块名，这里便是require("VueTableExport")
    library: 'VueTableExport',
    // libraryTarget会生成不同umd的代码,可以只是commonjs标准的，也可以是指amd标准的，也可以只是通过script标签引入的
    libraryTarget: 'umd',
    // 会对 UMD 的构建过程中的 AMD 模块进行命名。否则就使用匿名的 define
    umdNamedDefine: true
  },
  module:{
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin()
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        sourceMap: true
      })
    ]
  }
}
