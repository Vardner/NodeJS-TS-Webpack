import * as dotenv from 'dotenv';

dotenv.config({path: './env/.env.development', debug: true});

export const DB_CONFIG = {
    'development': {
        'username': process.env.DB_USER,
        'password': process.env.DB_PASSWORD,
        'database': process.env.DB_DATABASE,
        'host': '127.0.0.1',
    },
    'test': {
        'username': process.env.DB_USER,
        'password': process.env.DB_PASSWORD,
        'database': process.env.DB_DATABASE,
        'host': '127.0.0.1',
    },
    'production': {
        'username': process.env.DB_USER,
        'password': process.env.DB_PASSWORD,
        'database': process.env.DB_DATABASE,
        'host': '127.0.0.1',
    }
};



