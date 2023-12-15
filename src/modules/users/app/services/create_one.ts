import { TUserDOM } from '@users/domain/entities';
import { TUsersRepository } from '@users/domain/repository';

type Dependencies = {
    repository: TUsersRepository;
    createId: () => string;
};

export const buildCreateOne = ({ repository, createId }: Dependencies) => {
    const service = async (user: TUserDOM) => {
        user.id = createId();
        return await repository.createOne(user);
    };

    return service;
};
