const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require("webpack");

module.exports = {
	entry: {
		index: './app/src/index.js'
	},
	plugins: [
		new webpack.ProvidePlugin({
			$: 'jquery/dist/jquery.min.js',
			jQuery: 'jquery'
		}),
    new CleanWebpackPlugin(['build']),
    new HtmlWebpackPlugin({
			template: 'app/templates/index.html',
			title: 'Production'
		})
  ],
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'build')
	},
	module: {
		rules: [{
			test: /\.css$/,
			use: [
				'style-loader',
				'css-loader'
			]
		}]
	}
};
