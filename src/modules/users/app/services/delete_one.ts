import { TUsersRepository } from '@users/domain/repository';

type Dependencies = {
    repository: TUsersRepository;
};

export const buildDeleteOne = ({ repository }: Dependencies) => {
    const service = async (id: string) => {
        return await repository.deleteOne(id);
    };

    return service;
};
