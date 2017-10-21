const path = require('path');
const webpack = require('webpack');


module.exports = {
	entry: {
		app: './src/index.js'
	},
	
	devtool: 'inline-source-map',
	resolve: {
        extensions: ['.jsx', '.js']
    },
	devServer: {
		contentBase: './public',
		 proxy: {
          '/api': {
            target: 'http://localhost:3000',
            secure: false
          }
        }
	},

	plugins: [
	],

	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname,'public'),
		publicPath: '/'
	},
	module: {
		loaders: [
	      {
	        test: /\.json$/,
	        loader: "json-loader"
	      },
	      {
	        test: /\.jsx?$/,
	        exclude: /node_modules/,
	        loader: 'babel-loader'
	      },
	      {
      		test: /\.css$/,
            use: [
	            'style-loader',
	            'css-loader'
          	]
	      }
	    ]
	}
};