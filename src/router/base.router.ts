import {Router} from 'express';

export const BaseRouter = Router();

BaseRouter.get('', (req, res) => {
    res.send('empty path')
});

BaseRouter.get('/home', (req, res) => {
    res.send('you are at home page 24')
});
