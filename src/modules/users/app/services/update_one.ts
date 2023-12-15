import { TUserDOM } from '@users/domain/entities';
import { TUsersRepository } from '@users/domain/repository';

type Dependencies = {
    repository: TUsersRepository;
};

export const buildUpdateOne = ({ repository }: Dependencies) => {
    const service = async (user: TUserDOM) => {
        return await repository.updateOne(user);
    };

    return service;
};
