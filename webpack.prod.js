const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const optimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const terserPlugin = require("terser-webpack-plugin");

module.exports = merge(common, {
	mode: "production",
	module: {
		rules: [
			//? Babel Loader
			{
				test: /\.js$/,
				exclude: "/node_modules/",
				use: [
					{
						loader: "babel-loader",
						options: {
							presets: ["@babel/preset-env"],
						},
					},
				],
			},
		],
	},
	optimization: {
		minimizer: [new optimizeCssAssetsPlugin(), new terserPlugin()],
	},
});
