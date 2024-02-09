import type { TUserDOM } from '@users/domain/entities';
import type { TUsersRepository } from '@users/domain/repository';

type Dependencies = {
    repository: TUsersRepository;
    createId: () => string;
};

export const buildCreateOne = ({ repository, createId }: Dependencies) => {
    const service = async (user: TUserDOM): Promise<TUserDOM> => {
        user.id = createId();
        return await repository.createOne(user);
    };

    return service;
};
