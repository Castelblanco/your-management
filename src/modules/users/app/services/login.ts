import { type TUserDOM, type TUserLoginDOM, UserLoginDOM } from '@users/domain/entities';
import { type Dependencies } from '.';
import { ErrorAuth } from '@common/response/errors/auth_error';

export const buildLogin = ({ repository, singToken, encryptPassword }: Dependencies) => {
    const service = async (user: TUserDOM): Promise<TUserLoginDOM> => {
        const [userFind] = await repository.findAll(
            {
                email: user.email,
            },
            {
                limit: 1,
                offset: 0,
            },
        );

        if (!userFind)
            throw new ErrorAuth(`this user with email ${user.email}, not exist`);

        const checkPassword = encryptPassword.verify(user.password, userFind.password);

        if (!checkPassword) throw new ErrorAuth('password incorrect');
        const token = singToken(userFind, '1h');

        return new UserLoginDOM({
            ...userFind,
            token,
        });
    };

    return service;
};
