import Constants from 'expo-constants'

const ENV = {
    dev: {
        BASE_URL: 'http://192.168.8.100:8000',
    },
    staging: {
        BASE_URL: '',
    },
    prod: {
        BASE_URL: '',
    },
}

function getEnvVars(env = '') {
    if (env === null || env === undefined || env === '') return ENV.dev
    if (env.indexOf('dev') !== -1) return ENV.dev
    if (env.indexOf('staging') !== -1) return ENV.staging
    if (env.indexOf('prod') !== -1) return ENV.prod
    return null
}

export default getEnvVars(Constants.manifest.releaseChannel)
