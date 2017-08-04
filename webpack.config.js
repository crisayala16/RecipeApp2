var webpack = require('webpack');
module.exports = {
	entry: './app/app.js',
	output: {
		filename: 'public/bundle.js'
	},
	module: {
		loaders: [
		{
			test: /\.jsx?$/,
			include: /app/,
			loader: 'babel-loader',
			query: {
				presets: ['react', 'es2015', 'stage-0']
			}
		}]
	},
	node: {
		console: true,
		fs: 'empty',
		net: 'empty',
		tls: 'empty'
	},
	devtool: 'eval-source-map',
	plugins: [
		new webpack.DefinePlugin({'typeof window': '\"object\"' })
	]
};