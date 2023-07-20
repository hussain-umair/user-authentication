const REACT_APP = /^REACT_APP_/i


function getClientEnvironment(publicUrl) {
  process.env.IS_DEV = process.env.NODE_ENV === 'development'

  const raw = Object.keys(process.env)
    .filter(key => REACT_APP.test(key))
    .reduce(
      (env, key) => {
        env[key] = process.env[key]
        return env
      },
      {
        NODE_ENV: process.env.NODE_ENV || 'development',
        PUBLIC_URL: publicUrl,
        FAST_REFRESH: process.env.FAST_REFRESH !== 'false'
      }
    )

    const stringified = {
      'process.env': Object.keys(raw).reduce((env, key) => {
        env[key] = JSON.stringify(raw[key])
        return env
      }, {})
    }
    return { raw, stringified }
}

module.exports = getClientEnvironment