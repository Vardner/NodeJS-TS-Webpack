import jwt from 'jsonwebtoken';
import {APP_CONFIG} from '../../../MERNMessenger/back-end/src/config';
import {NextFunction, Request, Response} from 'express';
import {JWTAccessPayload} from '../../../MERNMessenger/back-end/src/controllers';
import {Middleware} from '../../../MERNMessenger/back-end/src/middleware/models';

    export const accessTokenParseExample = (req: Request, res: Response, next: NextFunction) => {
        const authHeader = req.headers.authorization;
        const [authType, token]: string[] = authHeader?.split(' ') || [];
        if (!authHeader || !token) {
            console.log('dead token', token)
            res.status(401).json({error: 'empty token'});
            return;
        }

        const request: Middleware.TokenParseRequest = req as Middleware.TokenParseRequest;

        let jwtErr = false;
        jwt.verify(token, APP_CONFIG.appKey, (err, decoded) => {
            if (err) {
                console.log('dead token', token)
                jwtErr = true;
                res.status(401).json({error: err});
            } else {
                if (request.middlewareData) {
                    request.middlewareData.user = decoded as JWTAccessPayload;
                } else {
                    request.middlewareData = {user: decoded as JWTAccessPayload};
                }
            }
        });

        if (jwtErr) {
            return;
        }

        next();
    };
