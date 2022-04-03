import * as dotenv from 'dotenv';
import * as pg from 'pg';

dotenv.config({path: './env/.env.development', debug: true});

export const DB_CONFIG = {
    'development': {
        'username': process.env.DB_USER,
        'password': process.env.DB_PASSWORD,
        'database': process.env.DB_DATABASE,
        'host': '127.0.0.1',
        'dialect': 'postgres',
        dialectModule: pg
    },
    'test': {
        'username': process.env.DB_USER,
        'password': process.env.DB_PASSWORD,
        'database': process.env.DB_DATABASE,
        'host': '127.0.0.1',
        'dialect': 'postgres',
        dialectModule: pg
    },
    'production': {
        'username': process.env.DB_USER,
        'password': process.env.DB_PASSWORD,
        'database': process.env.DB_DATABASE,
        'host': '127.0.0.1',
        'dialect': 'postgres',
        dialectModule: pg
    }
};

// Костыль необходимый для работы sequelize когда взаимодействие происходит через CLI
if (module.filename && module.filename.endsWith('.js')) {
    const mode = [process.env.NODE_ENV || 'development'];
    console.log('-------------------------------------------------');
    console.log('DATABASE CONFIGURATION FILE: using ' + mode + '  |');
    console.log('-------------------------------------------------');
    module.exports = DB_CONFIG[process.env.NODE_ENV || 'development'];
}



