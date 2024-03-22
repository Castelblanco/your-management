import { type TUserDOM, type TUserLoginDOM, UserLoginDOM } from '@users/domain/entities';
import type { TUsersRepository } from '@users/domain/repository';

type Dependecies = {
    repository: TUsersRepository;
    singToken: (payload: string | object | Buffer, expiresIn: string) => string;
};

export const buildLogin = ({ repository, singToken }: Dependecies) => {
    const service = async (user: TUserDOM): Promise<TUserLoginDOM> => {
        const [userFind] = await repository.findAll(
            {
                email: user.email,
            },
            {
                limit: 1,
                offset: 0,
                pointSale: true,
                role: true,
                status: true,
            },
        );

        const token = singToken(userFind, '1h');

        return new UserLoginDOM({
            ...userFind,
            token,
        });
    };

    return service;
};
