import type { TUserDOM } from '@users/domain/entities';
import { sign, verify } from 'jsonwebtoken';

const JWS_SECRET = Bun.env.JWS_SECRET || 'el-pepe';

export const singToken = (
    payload: string | object | Buffer,
    expiresIn: string,
): string => {
    return sign(payload, JWS_SECRET, {
        expiresIn,
    });
};

export const verifyToken = (token: string): TUserDOM =>
    verify(token, JWS_SECRET) as TUserDOM;
