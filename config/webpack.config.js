const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");
require("dotenv").config({ path: ".env" });

module.exports = () => {
    const APP_MODE = process.env.APP_MODE;
    const envConfig = require(`./webpack.${APP_MODE}.js`);
    return merge(commonConfig, envConfig);
};
