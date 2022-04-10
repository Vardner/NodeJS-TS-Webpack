"use strict";
exports.__esModule = true;
exports.DB_CONFIG = void 0;
var dotenv = require("dotenv");
var pg = require("pg");
dotenv.config({ path: './env/.env.development', debug: true });
exports.DB_CONFIG = {
    'development': {
        'username': process.env.DB_USER,
        'password': process.env.DB_PASSWORD,
        'database': process.env.DB_DATABASE,
        'host': '127.0.0.1',
        'dialect': 'postgres',
        dialectModule: pg,
        logging: false
    },
    'test': {
        'username': process.env.DB_USER,
        'password': process.env.DB_PASSWORD,
        'database': process.env.DB_DATABASE,
        'host': '127.0.0.1',
        'dialect': 'postgres',
        dialectModule: pg,
        logging: false
    },
    'production': {
        'username': process.env.DB_USER,
        'password': process.env.DB_PASSWORD,
        'database': process.env.DB_DATABASE,
        'host': '127.0.0.1',
        'dialect': 'postgres',
        dialectModule: pg,
        logging: false
    }
};
// Костыль необходимый для работы sequelize когда взаимодействие происходит через CLI
if (module.filename && module.filename.endsWith('.js')) {
    var mode = [process.env.NODE_ENV || 'development'];
    console.log('-------------------------------------------------');
    console.log('DATABASE CONFIGURATION FILE: using ' + mode + '  |');
    console.log('-------------------------------------------------');
    module.exports = exports.DB_CONFIG[process.env.NODE_ENV || 'development'];
}
