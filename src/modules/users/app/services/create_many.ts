import type { TUserDOM } from '@users/domain/entities';
import type { TUsersRepository } from '@users/domain/repository';

type Dependencies = {
    repository: TUsersRepository;
    createId: () => string;
};

export const buildCreateMany = ({ repository, createId }: Dependencies) => {
    const service = async (users: TUserDOM[]): Promise<number> => {
        return await repository.createMany(
            users.map((user) => {
                user.id = createId();
                return user;
            }),
        );
    };

    return service;
};
