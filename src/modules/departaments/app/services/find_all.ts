import type {
    TDepartamentFilterDOM,
    TDepartamentOPT,
    TDepartamentDOM,
} from '@departaments/domain/entities';
import type { TDepartamentRepository } from '@departaments/domain/repository';

type Dependencies = {
    repository: TDepartamentRepository;
};

export const buildFindAll = ({
    repository,
}: Dependencies): ((
    filter: TDepartamentFilterDOM,
    options: TDepartamentOPT,
) => Promise<TDepartamentDOM[]>) => {
    const service = async (
        filter: TDepartamentFilterDOM,
        options: TDepartamentOPT,
    ): Promise<TDepartamentDOM[]> => {
        return await repository.findAll(filter, options);
    };

    return service;
};
