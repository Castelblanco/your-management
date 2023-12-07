import { TCitiesRepository } from '@cities/domain/repository';

type Dependencies = {
    repository: TCitiesRepository;
};

export const buildDeleteOne = ({ repository }: Dependencies) => {
    const service = async (id: string) => {
        return await repository.deleteOne(id);
    };
    return service;
};
