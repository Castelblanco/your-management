import { TUsersRepository } from '@users/domain/repository';

type Dependencies = {
    repository: TUsersRepository;
};

export const buildFindOne = ({ repository }: Dependencies) => {
    const service = async (id: string, pointSale?: boolean, role?: boolean) => {
        return await repository.findOne(id, pointSale, role);
    };

    return service;
};
