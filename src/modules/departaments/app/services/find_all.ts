import {
    TDepartamentFilterDOM,
    TDepartamentOPT,
} from '@departaments/domain/entities';
import { TDepartamentRepository } from '@departaments/domain/repository';

type Dependencies = {
    repository: TDepartamentRepository;
};

export const buildFindAll = ({ repository }: Dependencies) => {
    const service = async (
        filter: TDepartamentFilterDOM,
        options: TDepartamentOPT,
    ) => {
        return await repository.findAll(filter, options);
    };

    return service;
};
