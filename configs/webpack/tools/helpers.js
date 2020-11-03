const path = require('path')
const fs = require('fs')

const appDirectory = fs.realpathSync(process.cwd())

const resolvePath = relativePath => path.resolve(appDirectory, relativePath)
const isDevMode = () => process.env.NODE_ENV === 'development'

module.exports = {
    resolvePath,
    appDirectory,
    isDevMode
}
