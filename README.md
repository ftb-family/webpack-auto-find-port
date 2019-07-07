<h1 align="center"> Wwebpack Auto Find Usable Port</h1>
<p>
  <img src="https://img.shields.io/badge/version-0.0.0-blue.svg?cacheSeconds=2592000" />
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

## Overview
A library for help webpack devserver find usable port when has port conflict.


## Install

```sh
npm install webpack-auto-find-port -D
```
## API

param | description | default | required
--------- | ---------- | ------ | ------
config | Provider the webpack devserver config. | null | yes
logger | Return the port with callback | null | no

## Usage
```js
const webpackBaseConfig = require('webpack-auto-find-port)
// here is your webpack devServer config

module.exports = webpackAutoFindPort({
  config: webpackDevConfig,
  logger: (port) => {}
})

```
## Example
You can run [Example demo](https://github.com/ftb-family/webpack-auto-find-port/tree/master/example)
```sh
cd example

npm install

# Now you can sperate two terminal in your local
# Run command in each terminal

npm run dev
```

[Detail config](https://github.com/ftb-family/webpack-auto-find-port/blob/master/example/build/webpack.dev.config.js#L26).
```js
const path = require('path')
const chalk = require('chalk')
const merge = require('webpack-merge')
const webpack = require('webpack')
const webpackBaseConfig = require('./webpack.base.config')
// here, we import our plugin
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

// here, export our config
module.exports = webpackAutoFindPort({
  config: webpackDevConfig,
  logger: (port) => {
    console.log('P is Runing at', port)
  }
})
```

## Author

👤 **biyuqiwan@163.com**
* Github: [@BiYuqi](https://github.com/BiYuqi )

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/ftb-family/webpack-auto-find-port/issues).


## 📝 License

Copyright © 2019 [biyuqiwan@163.com](https://github.com/ ).<br />
This project is [MIT](https://github.com/ftb-family/webpack-auto-find-port/blob/master/LICENSE) licensed.