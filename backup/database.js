var dotenv = require('dotenv');
dotenv.config({ path: './env/.env.development', debug: true });
console.log('database config ' + process.env.APP_URL);
var config = {
    'development': {
        'username': process.env.DB_USER,
        'password': process.env.DB_PASSWORD,
        'database': process.env.DB_DATABASE,
        'host': '127.0.0.1',
        'dialect': 'postgres'
    },
    'test': {
        'username': process.env.DB_USER,
        'password': process.env.DB_PASSWORD,
        'database': process.env.DB_DATABASE,
        'host': '127.0.0.1',
        'dialect': 'postgres'
    },
    'production': {
        'username': process.env.DB_USER,
        'password': process.env.DB_PASSWORD,
        'database': process.env.DB_DATABASE,
        'host': '127.0.0.1',
        'dialect': 'postgres'
    }
};
module.exports = config[process.env.NODE_ENV || 'development'];
