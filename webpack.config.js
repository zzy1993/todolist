let webpack = require('webpack');
let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: [
		'webpack-dev-server/client?http://localhost:8080',
		'webpack/hot/dev-server',
		'./src/index.js'
	],
	output: {
		path: 'dist',
		filename: 'index_bundle.js',
	},
	devtool: 'source-map',
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'react-hot!babel',
				include: path.resolve(__dirname, 'src'),
			},
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'src/index.html'),
			hash: true,
			filename: 'index.html',
			inject: 'body'
		}),
		new webpack.HotModuleReplacementPlugin()
	],
	devServer: {
		contentBase: path.resolve(__dirname, '/dist'),
		hot: true,
	}
};