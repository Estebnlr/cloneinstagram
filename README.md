npm install svelte

npm install @babel/core @babel/preset-env babel-loader svelte-loader --save-dev

npm install  webpack webpack-cli html-webpack-plugin --save-dev

#
npm install  webpack-dev-server  --save-dev

# Problema al insertar la imagen
npm install copy-webpack-plugin --save-dev

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    // ... Otras configuraciones

    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: './public/index.html',
            filename: './index.html'
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: 'src/images', to: 'images' }
            ]
        })
    ]
};


{
    test: /\.(png|jpe?g|gif)$/i,
    use: [
        {
            loader: 'file-loader',
            options: {
                outputPath: 'images',
            },
        },
    ],
}
