const {join, resolve } = require('path');
const HWP = require('html-webpack-plugin');
const webpack = require('webpack')
const path = require('path')

const dirname = resolve()

const config = {
  entry: '/src/main/public/index.tsx',
	target: 'web',
  output: {
    path: resolve(dirname, 'dist'),
    filename: 'build.js',
    publicPath: '/'
  },
	module: {
		rules: [
			{
				test: /\.(js|jsx|ts|tsx)$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},{
				test: /\.less$/,
				use: [
					{
						loader: 'style-loader'
					},{
						loader: 'css-loader',
					},{
						loader: "less-loader",
          	options: {
            	lessOptions: {
              	javascriptEnabled: true,
            	},
          		sourceMap: true,
						}
					}
				],
				exclude: /node_modules/,
			}
		]
	},
	resolve: {
		extensions: [ '.js','.jsx','.ts','.tsx','.json', '.less', '.css'],
		alias: {
			'@domain': path.resolve(__dirname, 'src/domain/'),
			'@application': path.resolve(__dirname, 'src/application/'),
			'@infra': path.resolve(__dirname, 'src/infra/'),
			'@presentation': path.resolve(__dirname, 'src/presentation/'),
			'@main': path.resolve(__dirname, 'src/main/'),
		}
	},
	plugins: [
		new webpack.ProvidePlugin({
			React: 'react'
		}),
		new HWP({
			template: join(dirname, 'src/main/public/index.html'),
			//favicon: join(dirname, 'src/presentation/assets/favicon.ico'),
		})
	],
	devServer: {
		historyApiFallback: true,
	}
}

module.exports = config;