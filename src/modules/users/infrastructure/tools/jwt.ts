import { sign, verify } from 'jsonwebtoken';

const JWS_SECRET = Bun.env.JWS_SECRET!;

export const singToken = (
    payload: string | object | Buffer,
    expiresIn: string,
): string => {
    return sign(payload, JWS_SECRET, {
        expiresIn,
    });
};

export const verifyToken = (token: string): any => verify(token, JWS_SECRET);
