import * as dotenv from 'dotenv';

dotenv.config({path: './env/.env.development'});

export const APP_CONFIG = {
    appKey: process.env.APP_KEY as string,
    appPort: process.env.APP_PORT as string,
    appUrl: process.env.APP_URL as string,
};

