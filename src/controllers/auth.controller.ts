import {Request, Response} from 'express';
import '@root/models';
import {DATABASE} from '@root/models/database';
import bcrypt from 'bcrypt';
import {IUserModelAttributes, User} from '@root/models';
import jwt from 'jsonwebtoken';
import {Buffer} from 'buffer';
import {APP_CONFIG} from '@root/config';

interface IRouteLoginData {
    email: string;
    password: string;
}


const generateToken = <T extends string | Buffer | object> (payload: T) => {
    return jwt.sign(payload, APP_CONFIG.appKey, {expiresIn: 86400});
};

const generateUserWithToken = (user: User) => {
    const payload: Partial<IUserModelAttributes> & { token: string } = user.get({plain: true}) as any;
    delete payload.password;
    payload.token = generateToken(payload);
    return payload;
};

export const login = async (req: Request<any, any, IRouteLoginData>, res: Response) => {
    const {email, password} = req.body;

    try {
        const user = await DATABASE.models.User.findOne<User>({
            where: {
                email: email
            }
        });


        if (!user || !bcrypt.compareSync(password, user.password)) {
            return res.status(404).json({message: 'User not found'});
        } else {
            return res.send(generateUserWithToken(user));
        }
    } catch (e) {
        return res.status(500).json({message: (e as Error)?.message ?? 'request'});
    }
};

export const register = async (req: Request, res: Response) => {
    try {
        const user = await User.create(req.body, {});
        return res.send(generateUserWithToken(user));
    } catch (e) {
        return res.status(500).json({message: (e as Error)?.message ?? 'request'});
    }
};
