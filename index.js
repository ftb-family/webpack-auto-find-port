const chalk = require('chalk')
const portfinder = require('portfinder')

const webpackAutoFindPort = async ({ config, logger }) => {
  let defaultPort = 8080

  if (!config.devServer) {
    config.devServer = {}
    config.devServer.port = defaultPort
  }

  if (config.devServer && !config.devServer.port) {
    config.devServer.port = defaultPort
  }

  portfinder.basePort = defaultPort

  portfinder.getPort({ host: '127.0.0.1' }, (err, port) => {
    if (err) {
      console.log(chalk.red('Can not find a useable port, please check your local port.'))
      return
    }

    config.devServer.port = port

    if (logger) {
      logger(port)
    }
  })
  return config
}

module.exports = webpackAutoFindPort