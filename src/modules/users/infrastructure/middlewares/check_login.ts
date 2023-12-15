import { HttpErrorCode } from '@common/enums/errors_enum';
import { ErrorAuth } from '@common/response/errors/auth_error';
import { TUserAPI } from '@users/domain/dto';
import { TUsersRepository } from '@users/domain/repository';
import { Context } from 'elysia';

type Dependencies = {
    repository: TUsersRepository;
    verifyPassword: (password: string, hash: string) => boolean;
};

type TContext = Context<{
    params: Record<string, string>;
}>;

export const buildCheckLogin = ({
    repository,
    verifyPassword,
}: Dependencies) => {
    const middleware = async ({ body }: TContext) => {
        const { email, password } = body as TUserAPI;

        const user = await repository.findOne({
            email,
        });

        const checkPassword = verifyPassword(password, user.password);

        if (!checkPassword)
            throw new ErrorAuth(
                'Password incorrect',
                HttpErrorCode.BAD_REQUEST,
            );
    };

    return middleware;
};
