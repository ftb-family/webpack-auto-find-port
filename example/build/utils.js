const path = require('path')

const isProd = process.env.NODE_ENV === 'production'

/**
 * get file path
 * @param {*} dir 
 */
const resolve = dir => {
  return path.join(__dirname, dir)
}

/**
 * get the config for webpack build
 * @param {*} env 
 */
const webpackOutConfig = (env) => {
  return env ? {
    filename: 'js/[name].[chunkhash].js',
    chunkFilename: 'js/[name].[id].[chunkhash].js'
  } : {
    filename: 'js/[name].js',
  }
}

module.exports = {
  isProd,
  resolve,
  webpackOutConfig
}
