const path = require('path');
const nodeExternals = require('webpack-node-externals');

const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

// File rules
const tsRules = {
    test: /\.ts$/,
    exclude: /node_modules/,
    use: [
        {
            loader: 'ts-loader',
            options: {
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
    target: 'node',
    entry: {
        app: './src/app.ts',
    },
    /**
     *  This setting help to fix the way of how webpack treats imports such as like path, fs, etc. (he searches for them as inner project dependency).
     *  Thus, webpack will treat these modules as external, so they will be loaded correctly from node js environment
     *  @see https://webpack.js.org/configuration/externals/#externals
     */
    externalsPresets: {node: true},
    /**
     * This setting help to fix the way of how webpack treats different imports inside node_modules folder.
     * Without it webpack will try to import every module in the beginning of the file which will lead to fail if module is absent.
     *
     */
    externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
    target: 'node',
    mode: 'development',
    devtool: 'inline-source-map',
    output: {
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
    plugins: []
};
