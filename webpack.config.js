const path = require('path');
const IS_PROD = process.env.NODE_ENV === 'production';
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const uglify = require('uglifyjs-webpack-plugin');

const BUILD_DIST = 'dist';

module.exports = {
    mode: IS_PROD ? 'production' : 'development',
    entry: path.join(__dirname, 'src/app.js'), // 入口文件
    output: {
        path: path.join(__dirname, BUILD_DIST), // 定义输出目录
        filename: 'bundle.js'  // 定义输出文件名称
    },
    devtool: IS_PROD ? undefined : 'cheap-eval-source-map',
    devServer: {
        contentBase: './dist',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader',
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader', // translates CSS into CommonJS
                        options: { sourceMap: !IS_PROD },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {           // 如果没有options这个选项将会报错 No PostCSS Config found
                            plugins: (loader) => [
                                require('autoprefixer')(), //CSS浏览器兼容
                            ]
                        }
                    },
                ],
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader', // translates CSS into CommonJS
                        options: { sourceMap: !IS_PROD },
                    },
                    {
                        loader: 'fast-sass-loader', // compiles Sass to CSS
                        options: { sourceMap: !IS_PROD },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {           // 如果没有options这个选项将会报错 No PostCSS Config found
                            plugins: (loader) => [
                                require('autoprefixer')(), //CSS浏览器兼容
                            ]
                        }
                    },
                ],
            }
        ],
    },
    resolve: {
        extensions: ['.jsx', '.mjs', '.js', '.ts', '.tsx', '.json'],
    },
    plugins: [
        // new CleanWebpackPlugin([BUILD_DIST]),
        // new uglify(),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: `index.css`,
            chunkFilename: `index.css`,
            minify: {
                // 压缩HTML⽂件
                removeComments: true, // 移除HTML中的注释
                collapseWhitespace: true, // 删除空⽩符与换⾏符
                minifyCSS: true // 压缩内联css
            },
        }),
        new HtmlWebpackPlugin({
            template: './index.html',
            title: 'Paper analysis',
        }),
    ],
};