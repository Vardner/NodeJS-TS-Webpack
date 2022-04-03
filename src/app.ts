import express from 'express';
import {APP_CONFIG} from '@root/config';
import './config/database';
import {BaseRouter, AuthRouter} from '@root/router';
import bodyParser from 'body-parser';

const app = express();

const URL = APP_CONFIG.appUrl;
const PORT = APP_CONFIG.appPort;

console.log(URL + ' ' + PORT);

app.listen(+PORT, URL, () => console.log('listening enabled'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(BaseRouter, AuthRouter);
