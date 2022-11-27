const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { TsconfigPathsPlugin } = require("tsconfig-paths-webpack-plugin");
const { DefinePlugin } = require("webpack");
require("dotenv").config({ path: ".env" });

const API_KEY = process.env.API_KEY;
const AUTH_DOMAIN = process.env.AUTH_DOMAIN;
const PROJECT_ID = process.env.PROJECT_ID;
const STORAGE_BUCKET = process.env.STORAGE_BUCKET;
const MESSAGING_SENDER_ID = process.env.MESSAGING_SENDER_ID;
const APP_ID = process.env.APP_ID;
const MEASUREMENT_ID = process.env.MEASUREMENT_ID;

module.exports = {
    entry: path.resolve(__dirname, "..", "./src/index.tsx"),
    mode: "development",
    resolve: {
        plugins: [new TsconfigPathsPlugin()],
        extensions: [".tsx", ".ts", ".js", ".jsx"],
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                    },
                ],
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(?:icon|gif|jpeg|jpg|png)$/i,
                type: "asset/resource",
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf)$/,
                type: "asset/inline",
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: "babel-loader",
                    },
                    {
                        loader: "@svgr/webpack",
                        options: {
                            babel: false,
                            prettier: false,
                            titleProp: true,
                            ref: true,
                            icon: true,
                        },
                    },
                ],
            },
        ],
    },
    output: {
        path: path.resolve(__dirname, "..", "./build"),
        filename: "bundle.js",
        publicPath: "/",
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "..", "./public/index.html"),
            favicon: path.resolve(__dirname, "..", "./public/favicon.ico"),
        }),
        new DefinePlugin({
            "process.env.API_KEY": JSON.stringify(API_KEY),
            "process.env.AUTH_DOMAIN": JSON.stringify(AUTH_DOMAIN),
            "process.env.PROJECT_ID": JSON.stringify(PROJECT_ID),
            "process.env.STORAGE_BUCKET": JSON.stringify(STORAGE_BUCKET),
            "process.env.MESSAGING_SENDER_ID":
                JSON.stringify(MESSAGING_SENDER_ID),
            "process.env.APP_ID": JSON.stringify(APP_ID),
            "process.env.MEASUREMENT_ID": JSON.stringify(MEASUREMENT_ID),
        }),
    ],
};
