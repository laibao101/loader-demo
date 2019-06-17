const path = require('path');

const getLoaderPath = (loaderPath) => {
    return path.resolve(__dirname, "loaders", loaderPath);
}

module.exports  = {
    entry: "./src/index.js",
    mode: "development",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: getLoaderPath("loader1"),
                        options: {
                            author: 'laibao101',
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpg|jpeg)$/,
                use: [
                    {
                        loader: getLoaderPath("loader2"),
                        options: {
                            watermarkPath: "./static/img/mi-logo.png",
                        }
                    }
                ]
            }
        ]
    }
}
