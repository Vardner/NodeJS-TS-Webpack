import express from 'express';
import {APP_CONFIG} from '@root/config';
import './config/database';
import {setupApplicationRoutes} from '@root/router';
import bodyParser from 'body-parser';
import cors from 'cors';
import {createServer} from 'http';

const URL = APP_CONFIG.appUrl;
const PORT = APP_CONFIG.appPort;
const app = express();
const server = createServer(app);

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
setupApplicationRoutes(app);
app.use('/assets', express.static('./assets'));
app.use(express.static('./uploads'));

server.listen(+PORT, URL);
