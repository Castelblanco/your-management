import { TDepartamentRepository } from '@departaments/domain/repository';

type Dependencies = {
    repository: TDepartamentRepository;
};

export const buildDeleteOne = ({ repository }: Dependencies) => {
    const service = async (id: string) => {
        return await repository.deleteOne(id);
    };

    return service;
};
