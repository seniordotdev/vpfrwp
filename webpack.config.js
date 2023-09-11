const path = require("path");

module.exports = {
	entry: "./src/player.jsx", // Make sure this matches the actual file name and extension
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "player.js",
		libraryTarget: "umd",
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
				},
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},
		],
	},
	resolve: {
		extensions: [".js", ".jsx"], // Add '.jsx' extension to resolve JSX files
	},
};
