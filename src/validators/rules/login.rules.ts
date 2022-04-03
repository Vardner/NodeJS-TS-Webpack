import {body} from 'express-validator';
import {TUserModelAttributes} from '@root/models';
import {validate} from '@root/validators';

export const loginRules = [
    body('email' as TUserModelAttributes).isEmail(),
    body('password' as TUserModelAttributes).notEmpty(),
    validate
];
