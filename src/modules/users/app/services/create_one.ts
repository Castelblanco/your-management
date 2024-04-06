import type { TUserDOM } from '@users/domain/entities';
import { type Dependencies } from '.';

export const buildCreateOne = ({
    repository,
    createId,
    encryptPassword,
}: Dependencies) => {
    const service = async (user: TUserDOM): Promise<TUserDOM> => {
        user.id = createId();
        user.password = encryptPassword.encrypt(user.password);
        return await repository.createOne(user);
    };

    return service;
};
