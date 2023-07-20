const path = require('path')
const fs = require('fs')
const getPublicUrlOrPath = require('react-dev-utils/getPublicUrlOrPath')

const appDirectory = fs.realpathSync(process.cwd())

const resolveApp = relativePath => path.resolve(appDirectory, relativePath)

const publicUrlOrPath = getPublicUrlOrPath(
  process.env.NODE_ENV === 'development',
  require(resolveApp('package.json')).homepage,
  process.env.PUBLIC_URL
)

const buildPath = process.env.BUILD_PATH || 'build'

const moduleFileExtensions = ['js']
const resolveModule = (resolveFn, filePath) => {
  const extension = moduleFileExtensions.find(extension =>
    fs.existsSync(resolveFn(`${filePath}.${extension}`))
  )
  if (extension) {
    return resolveFn(`${filePath}.${extension}`)
  }

  return resolveFn(`${filePath}.js`)
}

module.exports = {
  appPublic: resolveApp('public'),
  appIndexJs: resolveModule(resolveApp('src/index')),
  appBuild: resolveApp(buildPath),
  appSrc: resolveApp('src'),
  appHtml: resolveApp('public/index.html'),
  appPath: resolveApp('.'),
  publicUrlOrPath
}

console.log('appDirectory=> ', appDirectory)