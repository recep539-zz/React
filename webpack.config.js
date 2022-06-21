const path = require("path");

module.exports = {
    mode: "production",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 9000,
        historyApiFallback:true
    },
    module: {
        rules: [
            
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
             {
                 test: /\.scss$/,
                 use: ['style-loader','css-loader','sass-loader']
             },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: 'file-loader',   
            }
        ]
    }
}