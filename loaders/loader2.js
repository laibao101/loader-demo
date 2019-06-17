const path = require("path");
const images = require("images");
const loaderUtils = require('loader-utils');


function loader(source) {
    const { watermarkPath = '' } = this.query;
    const url = loaderUtils.interpolateName(this, "[path][name].[ext]", {
        content: source,
        context: this.context
    });
    const file = images(path.resolve(this.context, url))
        .draw(images(path.resolve(this.rootContext, watermarkPath)), 10, 10)
        .encode(path.extname(url) || 'png');

    
    // 发射文件
    this.emitFile(url, file);

    const publicPath = `__webpack_public_path__ + ${JSON.stringify(url)}`;

    return `module.exports = ${publicPath};`;
}

module.exports = loader;

module.exports.raw = true;