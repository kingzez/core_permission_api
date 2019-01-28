interface DBInterface {
    username: string,
    password: string,
    database: string,
    host: string,
    port: number,
    dialect: string,
}

export const DB: DBInterface = {
        username: process.env.DB_USERNAME || 'w',
        password: process.env.DB_PASSWORD || '',
        database: process.env.DB_NAME || 'sso-server',
        host: process.env.DB_HOSTNAME || 'localhost',
        port: parseInt(process.env.DB_PORT) || 5432,
        dialect: 'postgres',
}

export const SERVER_PORT: number = 8999

export const SESSION_HOST: string = process.env.SESSION_HOST || 'http://10.11.3.137:11104'

export const OAUTH2_SERVER_HOST: string = process.env.OAUTH2_SERVER_HOST || 'http://localhost:8998'

export const OAUTH2_CONFIG = {
    clientId: 'core_permission',
    clientSecret: 'core_permission',
}
