import 'dotenv/config'

export const appConfig = () => {
    return {
        host: process.env.APP_HOST ?? 'localhost',
        port: process.env.APP_PORT ?? '3000',
    }
};
