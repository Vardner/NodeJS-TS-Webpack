import {body} from 'express-validator';
import {TUserModelAttributes} from '@root/models';
import {validate} from '@root/validators';

export const registerRules = [
    body('firstName' as TUserModelAttributes).isString(),
    body('lastName' as TUserModelAttributes).notEmpty(),
    body('gender' as TUserModelAttributes).notEmpty(),
    body('email' as TUserModelAttributes).isEmail(),
    body('password' as TUserModelAttributes).isStrongPassword({minLength: 5, minSymbols: 0, minNumbers: 1}),
    validate
];
