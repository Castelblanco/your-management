import type { TUserDOM } from '@users/domain/entities';
import type { TUsersRepository } from '@users/domain/repository';

type Dependencies = {
    repository: TUsersRepository;
    createId: () => string;
};

export const buildCreateOne = ({
    repository,
    createId,
}: Dependencies): ((user: TUserDOM) => Promise<TUserDOM>) => {
    const service = async (user: TUserDOM): Promise<TUserDOM> => {
        user.id = createId();
        return await repository.createOne(user);
    };

    return service;
};
