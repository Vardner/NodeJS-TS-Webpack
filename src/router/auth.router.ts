import {Router} from 'express';
import {login, register} from '../controllers/auth.controller';
import {loginRules, registerRules} from '@root/validators';

export const AuthRouter = Router();

AuthRouter.post('/login', loginRules, login);
AuthRouter.post('/register', registerRules, register);
