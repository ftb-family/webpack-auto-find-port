<h1 align="center"> Webpack Auto Find Usable Port</h1>
<p align="center">
  <img src="https://img.shields.io/badge/version-0.0.3-blue.svg?cacheSeconds=2592000" />
  <a href=" ">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" target="_blank" />
  </a>
  <a href="https://github.com/ftb-family/webpack-auto-find-port/graphs/commit-activity">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" target="_blank" />
  </a>
  <a href="https://github.com/ftb-family/webpack-auto-find-port/blob/master/LICENSE">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" target="_blank" />
  </a>
</p>

[English](./README.md) | 简体中文

## 前言
一个解决启动项目时，与其他项目端口冲突的问题，自动寻找可用的端口.


## 安装

```sh
npm install webpack-auto-find-port -D
```

## API

param | description | type | required
--------- | ---------- | ------ | ------
config | 需要提供webpack devServer 的配置信息 | object | 是
logger | 返回当前运行在哪个端口 | function | 否

## 使用
```js
const webpackAutoFindPort = require('webpack-auto-find-port')
// 在下面是你的 webpackDevServer代码
// ...code

module.exports = webpackAutoFindPort({
  config: webpackDevConfig,
  logger: (port) => {}
})

```
## 具体案例
可以查看 [Example demo](https://github.com/ftb-family/webpack-auto-find-port/tree/master/example)
```sh
cd example

npm install

# 同时打开两个命令行运行example demo
# 在每个命令行都输入启动项目的命令, 会看到端口会自动累加

npm run dev
```

[Demo 具体配置信息](https://github.com/ftb-family/webpack-auto-find-port/blob/master/example/build/webpack.dev.config.js#L26).

```js
const path = require('path')
const chalk = require('chalk')
const merge = require('webpack-merge')
const webpack = require('webpack')
const webpackBaseConfig = require('./webpack.base.config')
// 加载插件
const webpackAutoFindPort = require('webpack-auto-find-port')

const webpackDevConfig = merge(webpackBaseConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(`${process.cwd()}`, '../dist/index.html'),
    publicPath: '/',
    compress: true,
    noInfo: true,
    disableHostCheck: true,
    open: true,
    inline: true,
    port: 8080
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
})

// 使用插件
module.exports = webpackAutoFindPort({
  config: webpackDevConfig,
  logger: (port) => {
    console.log('P is Runing at', port)
  }
})
```

## 作者

👤 **biyuqiwan@163.com**
* Github: [@BiYuqi](https://github.com/BiYuqi )

## 🤝 Contributing

欢迎贡献代码，提交issue和PR! [issues page](https://github.com/ftb-family/webpack-auto-find-port/issues).


## 📝 License

Copyright © 2019 [biyuqiwan@163.com](https://github.com/ ).<br />
This project is [MIT](https://github.com/ftb-family/webpack-auto-find-port/blob/master/LICENSE) licensed.
