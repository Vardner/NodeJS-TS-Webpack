import * as dotenv from 'dotenv';

// In require commend scenario, path is resolved relatively to place from which program running
// In this project case since program is running from project folder FOLDER_NAME, required env folder located in it as child folder
dotenv.config({path: './env/.env.development'});

export const APP_CONFIG = {
    appKey: process.env.APP_KEY as string,
    appPort: process.env.APP_PORT as string,
    appUrl: process.env.APP_URL as string,
};
