import {Request, Response} from 'express';
import '@root/models';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import {APP_CONFIG} from '@root/config';

export class ExampleControllerBP {
    static generateAccessToken (payload: string) {
        return jwt.sign(payload, APP_CONFIG.appKey, {expiresIn: 86400000});
    }

    constructor () {
        this.login = this.login.bind(this);
        this.register = this.register.bind(this);
    }

    async login (req: Request<any, any, {[key: string]: any}>, res: Response) {
        const {email, password} = req.body;

        try {
            const storedUserData = {password: 'hashedPassword'};
            
            if (!storedUserData || !bcrypt.compareSync(password, storedUserData.password)) {
                return res.status(404).json({message: 'User not found'});
            } else {
                const userData = JSON.stringify({email, password});
                return res.send({user, token: ExampleControllerBP.generateAccessToken(userData)});
            }
        } catch (e) {
            return res.status(500).json({message: (e as Error)?.message ?? 'cannot verify user data due to server error'});
        }
    }

    async register (req: Request, res: Response) {
        if (Math.random() > 0.5) {
            res.send({user: {name: 'Test'}, token: Math.random()});
        } else {
            return res.status(500).json({message: 'error occurred'});
        }
    };
}

export const ExampleController = new ExampleControllerBP();

