import type { TCityDOM, TCityFilterDOM, TCityOPT } from '@cities/domain/entities';
import type { TCitiesRepository } from '@cities/domain/repository';

type Dependencies = {
    repository: TCitiesRepository;
};

export const buildFindAll = ({ repository }: Dependencies) => {
    const service = async (
        filter: TCityFilterDOM,
        options: TCityOPT,
    ): Promise<TCityDOM[]> => {
        return await repository.findAll(filter, options);
    };
    return service;
};
