const path              = require('path');
const webpack           = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {

	entry: path.resolve(__dirname, 'src/index.js'),

	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},

	module: {
		rules: [
			{ test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
			{ test: /\.(s)?css$/, use: ['style-loader', 'css-loader', 'sass-loader'], exclude: /node_modules/ }
		]
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'src/index.html')
		}),
		new webpack.DefinePlugin({
			TESTING: process.env.NODE_ENV === 'TEST'
		}),
	],

};


if(process.env.NODE_ENV == 'PRODUCTION') {
	config.plugins.push(
		new webpack.optimize.UglifyJsPlugin()
	);
}


module.exports = config;
