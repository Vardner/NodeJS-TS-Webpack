import {body} from 'express-validator';
import {validate} from '@root/validators';

export const exampleRuleLogin = [
    body('email').isEmail(),
    body('password').notEmpty(),
    validate
];

export const exampleRuleRegister = [
    body('firstName').isString(),
    body('lastName').notEmpty(),
    body('gender').notEmpty(),
    body('email').isEmail(),
    body('password').isStrongPassword({minLength: 5, minSymbols: 0, minNumbers: 1}),
    validate
];
