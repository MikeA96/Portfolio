const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');
const Dotenv = require('dotenv-webpack')

module.exports = {
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader'
                    }
                ]
            },
            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'url-loader',
                  },
                ],
              },
              {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
              },
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
        alias: {
            Components: path.resolve(__dirname, 'src/components/'),
            Styles: path.resolve(__dirname, 'src/scss/'),
            Reducers: path.resolve(__dirname, 'src/redux/reducers/'),
            Actions: path.resolve(__dirname, 'src/redux/actions/'),
            Constants: path.resolve(__dirname, 'src/constants/'),
            Utils: path.resolve(__dirname, 'src/utils/')
        }
      },
    plugins: [
        new HtmlWebPackPlugin({
            template: './dist/template.html',
            filename: './index.html'
        }),
        new Dotenv({
            systemvars: true
        })
    ]
};