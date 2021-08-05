export const reqTimeoutSecs = process.env.OFFCHAIN_REQ_TIMEOUT_SECS || 5

export const allowedOrigins = process.env.CORS_ALLOWED_ORIGIN?.split(',').map(x => x.trim()) || [ 'http://localhost' ]

export const port = process.env.OFFCHAIN_SERVER_PORT || 3001

export const APIS_TOKEN = 'APIS'
export const SUBSOCIAL_API_TOKEN = 'SUBSOCIAL_API'
