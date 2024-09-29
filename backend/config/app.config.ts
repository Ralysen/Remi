import 'dotenv/config'

export const appConfig = () => {
    return {
        host: process.env.APP_HOST ?? 'localhost',
        port: process.env.APP_PORT ?? '3000',
        database_link: process.env.DATABASE_URL ?? "postgresql://postgres:admin@localhost:5434/remi_db?schema=public",
    }
};
