const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

// File rules
const tsRules = {
    test: /\.ts$/,
    exclude: /node_modules/,
    // include: [path.join(__dirname, 'src/index.ts')],
    use: [
        {
            // loader: 'awesome-typescript-loader',
            loader: 'ts-loader',
            options: {
                // useCache: true,
                logLevel: 'warn',
                experimentalFileCaching: true,
                onlyCompileBundledFiles: true,
                silent: true,
                transpileOnly: false,
                reportFiles: [
                    './resources/scripts/**/*.ts'
                ]
            }
        }
    ]
};

const htmlRules = {
    test: /\.(html)$/,
    use: {
        loader: 'html-loader',
        options: {
            interpolate: true
        }
    }
};


module.exports = {
    entry: {
        app: './src/app.ts',
    },
    externals: [nodeExternals()],
    target: "node",
    mode: 'development',
    devtool: 'inline-source-map',
    output: {
        publicPath: '../',
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js'
    },
    resolve: {
        plugins: [new TsconfigPathsPlugin({configFile: './tsconfig.json'})],
        extensions: ['.ts', '.js'] //resolve all the modules other than index.ts
    },
    module: {
        rules: [tsRules, htmlRules]
    },
}
