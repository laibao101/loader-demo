const path = require('path');
const fs = require('fs');
const baseUrl = process.cwd();
const configTextPath = "bannerConfig.txt";
// 拼接完整的配置文件路径
const fullConfigPath = path.resolve(baseUrl, configTextPath);
// 根据模板中的占位符，来获取数据
const configItemMap = {
    author: "laibao101",
    time: new Date().toLocaleString()
};
// 匹配占位符
const reg = /{(\w+)}/gi;

function loader (source) {
    const callback = this.async();
    fs.readFile(fullConfigPath, (err, data) => {
        if (err) {
            // 如果读取文件失败，返回错误
            callback(err);
        }
        // 获取文件内容
        const template = data.toString();
        // 根据模板，修改占位符数据，完成banner
        const banner = template.replace(reg, (match, key) => {
            return configItemMap[key] || key;
        });
        // 拼接返回值
        const ret = `
            ${banner}
            ${source}
        `;
        callback(null, ret);
    });
}

module.exports = loader;