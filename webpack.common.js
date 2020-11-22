const path = require("path");
const webpack = require("webpack");
const htmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: "./src/script.js",
    output: {
        path: path.resolve(__dirname, "Dist"),
        filename: "bundle.js"
    },
    //? Module
    module: {
        rules: [
            //? CSS Loader
            {
                test: /\.css$/,
                use: [{
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    }
                ]
            }
        ]
    },
    //? Plugin
    plugins: [
        //? Html Webpack Plugin
        new htmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html"
        })
    ]
}