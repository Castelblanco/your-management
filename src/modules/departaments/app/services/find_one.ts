import { TDepartamentRepository } from '@departaments/domain/repository';

type Dependencies = {
    repository: TDepartamentRepository;
};

export const buildFindOne = ({ repository }: Dependencies) => {
    const service = async (id: string) => {
        return await repository.findOne(id);
    };

    return service;
};
