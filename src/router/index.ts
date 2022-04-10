import {Application} from 'express';
import {ExampleRouter} from '@root/router/example.router';

export const setupApplicationRoutes = (app: Application) => {
    app.use(ExampleRouter);
};
