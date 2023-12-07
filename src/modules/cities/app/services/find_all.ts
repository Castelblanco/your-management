import { TCityFilterDOM, TCityOPT } from '@cities/domain/entities';
import { TCitiesRepository } from '@cities/domain/repository';

type Dependencies = {
    repository: TCitiesRepository;
};

export const buildFindAll = ({ repository }: Dependencies) => {
    const service = async (filter: TCityFilterDOM, options: TCityOPT) => {
        return await repository.findAll(filter, options);
    };
    return service;
};
