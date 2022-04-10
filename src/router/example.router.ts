import {Router} from 'express';
import {exampleRuleLogin, exampleRuleRegister} from '@root/validators';
import {ExampleController} from '@root/controllers';
import { accessTokenParseExample } from '@root/middleware';

export const ExampleRouter = Router();

ExampleRouter.post('/login', exampleRuleLogin, ExampleController.login);
ExampleRouter.post('/register', exampleRuleRegister, ExampleController.register);
ExampleRouter.post('/verify', accessTokenParseExample, function nextHandler (req, res, next) {/** .... */})
