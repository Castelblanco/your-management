import type { TUserDOM } from '@users/domain/entities';
import type { TUsersRepository } from '@users/domain/repository';

type Dependencies = {
    repository: TUsersRepository;
};

export const buildUpdateOne = ({
    repository,
}: Dependencies): ((user: TUserDOM) => Promise<TUserDOM>) => {
    const service = async (user: TUserDOM): Promise<TUserDOM> => {
        return await repository.updateOne(user);
    };

    return service;
};
