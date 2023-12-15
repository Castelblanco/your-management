import { TUserDOM } from '@users/domain/entities';
import { TUsersRepository } from '@users/domain/repository';

type Dependencies = {
    repository: TUsersRepository;
    createId: () => string;
};

export const buildCreateMany = ({ repository, createId }: Dependencies) => {
    const service = async (users: TUserDOM[]) => {
        return await repository.createMany(
            users.map((user) => {
                user.id = createId();
                return user;
            }),
        );
    };

    return service;
};
