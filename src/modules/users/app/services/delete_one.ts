import type { TUsersRepository } from '@users/domain/repository';

type Dependencies = {
    repository: TUsersRepository;
};

export const buildDeleteOne = ({ repository }: Dependencies) => {
    const service = async (id: string): Promise<void> => {
        await repository.deleteOne(id);
    };

    return service;
};
