const chalk = require('chalk')
const portfinder = require('portfinder')

const webpackAutoFindPort = async ({ config, logger }) => {
  const oldPort = config.devServer.port
  if (!oldPort) {
    console.log(chalk.red('Please provide a standed webpack devServer config.'))
    process.exit()
  }

  portfinder.basePort = oldPort

  portfinder.getPort({ host: '127.0.0.1' }, (err, port) => {
    if (err) {
      console.log(chalk.red('Can not find a useable port, please check yourself.'))
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