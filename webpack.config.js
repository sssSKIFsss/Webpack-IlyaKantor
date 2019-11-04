'use strict';

const path = require("path");
const webpack = require("webpack");

const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
	entry: "./home",
	output: {
		path: path.resolve(__dirname,  ""),
		filename: "build.js",
		library: "home"
	},

	watch: NODE_ENV === 'development',
	watchOptions: {
		aggregateTimeout: 100
	},

	devtool: NODE_ENV === 'development' ? "eval" : "hidden-source-map",

	plugins: [
		new webpack.DefinePlugin({
			NODE_ENV: JSON.stringify(NODE_ENV)
		})
	]
};