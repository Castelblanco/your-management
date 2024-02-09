import { HttpErrorCode } from '@common/enums/errors_enum';
import { ErrorAuth } from '@common/response/errors/auth_error';
import type { TUserAPI } from '@users/domain/dto';
import type { TUsersRepository } from '@users/domain/repository';
import type { Context } from 'elysia';

type Dependencies = {
    repository: TUsersRepository;
    verifyPassword: (password: string, hash: string) => boolean;
};

type TContext = Context<{
    params: Record<string, string>;
}>;

export const buildCheckLogin = ({ repository, verifyPassword }: Dependencies) => {
    const middleware = async ({ body }: TContext): Promise<void> => {
        const { email, password } = body as TUserAPI;

        const [user] = await repository.findAll(
            {
                email,
            },
            {
                limit: 1,
                offset: 0,
                pointSale: false,
                role: false,
            },
        );

        const checkPassword = verifyPassword(password, user.password);

        if (!checkPassword)
            throw new ErrorAuth('Password incorrect', HttpErrorCode.BAD_REQUEST);
    };

    return middleware;
};
