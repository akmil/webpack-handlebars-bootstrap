/* eslint-disable no-tabs */

const Path = require('path');
const glob = require('glob');
const Webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const ExtractSASS = new ExtractTextPlugin('./[name].[hash].css');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const webpack = require('webpack');

const pages = require('./src/pages');

const renderedPages = [];

const getHtmlPagesPlugins = (isMinify = false) => {
    const minify = isMinify ? {
        removeComments: true,
        collapseWhitespace: false,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
    } : null;

    for (let i = 0; i < pages.length; i++) {
        const page = { ...pages[i] };
        renderedPages.push(
            new HtmlWebpackPlugin({
                template: page.template,
                filename: page.output,
                title: page.content.title,
                description: page.content.description,
                minify
            })
        );
    }
};

getHtmlPagesPlugins(false);


module.exports = options => {
    const dest = Path.join(__dirname, 'dist');

    const webpackConfig = {
        devtool: options.devtool,
        entry: ['./src/app.js'],
        output: {
            path: dest,
            filename: './assets/scripts/[name].[hash].js',
            publicPath: '/',
            chunkFilename: './assets/scripts/components/js/[name].js'
        },
        plugins: [
            new Webpack.ProvidePlugin({
                '$': 'jquery',
                'jQuery': 'jquery',
                'window.jQuery': 'jquery',
                'Tether': 'tether',
                'window.Tether': 'tether',
                'Popper': ['popper.js', 'default'],
            }),
            new CopyWebpackPlugin([
                { from: './src/assets/images', to: './assets/images' }
            ]),
            new CopyWebpackPlugin([
                { from: './src/assets/fonts', to: './assets/fonts' }
            ]),
            new Webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: JSON.stringify(options.isProduction ? 'production' : 'development')
                }
            })
        ],
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader'
                },
                {
                    test: /\.hbs$/,
                    loader: 'handlebars-loader',
                    query: {
                        helperDirs: [
                            Path.join(__dirname, 'src', 'helpers')
                        ],
                        /* partialDirs: [
						  Path.join(__dirname, 'src', 'layouts'),
						  Path.join(__dirname, 'src', 'components'),
						  Path.join(__dirname, 'src', 'components/header'),
						  Path.join(__dirname, 'src', 'pages'),
						] */
                        partialDirs: [Path.resolve(__dirname, 'src')].concat(glob.sync('**/', {
                            cwd: Path.resolve(__dirname, 'src'),
                            realpath: true
                        }))
                    }
                },
                {
                    test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                    use: [{
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: './assets/fonts'
                        }
                    }]
                },
                {
                    test: /\.(gif|jpg|png)$/,
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: './assets/images'
                    }
                }
            ]
        },
        optimization: {
            chunkIds: 'named',
            mergeDuplicateChunks: false,
            splitChunks: {
                cacheGroups: {
                    vendor: {
                        test: /[\\/]node_modules[\\/]/,
                        name: '../vendors-bundle',
                        chunks: 'all',
                        enforce: true
                    }
                }
            }
        }
    };

    if (options.isProduction) {
        webpackConfig.entry = ['./src/app.js'];

        webpackConfig.plugins.push(
            ExtractSASS,
            new CleanWebpackPlugin(['dist'], {
                verbose: true,
                dry: false
            })
        );

        webpackConfig.module.rules.push({
            test: /\.scss$/i,
            use: ExtractSASS.extract(['css-loader', 'sass-loader'])
        }, {
            test: /\.css$/i,
            use: ExtractSASS.extract(['css-loader'])
        });

    } else {
        webpackConfig.plugins.push(
            new Webpack.HotModuleReplacementPlugin()
        );

        webpackConfig.module.rules.push({
            test: /\.scss$/i,
            use: ['style-loader?sourceMap', 'css-loader?sourceMap', 'sass-loader?sourceMap']
        }, {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader']
        }, {
            test: /\.js$/,
            use: 'eslint-loader',
            exclude: /node_modules/
        });

        webpackConfig.devServer = {
            port: options.port,
            contentBase: dest,
            historyApiFallback: true,
            compress: options.isProduction,
            inline: !options.isProduction,
            hot: !options.isProduction,
            stats: {
                chunks: false
            }
        };

        webpackConfig.plugins.push(
            new BrowserSyncPlugin({
                host: 'localhost',
                port: 8081,
                proxy: 'http://localhost:8081/',
                files: [{
                    match: [
                        '**/*.hbs'
                    ],
                    fn(event, file) {
                        if (event === 'change' || event === 'add' || event === 'unlink') {
                            const bs = require('browser-sync').get('bs-webpack-plugin');
                            bs.reload();
                        }
                    }
                }]
            }, {
                reload: false
            })
        );

    }

    webpackConfig.plugins = webpackConfig.plugins.concat(renderedPages);

    return webpackConfig;

};
