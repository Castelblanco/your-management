import type {
    TDepartmentFilterDOM,
    TDepartmentOPT,
    TDepartmentDOM,
} from 'modules/departments/domain/entities';
import type { TDepartmentRepository } from 'modules/departments/domain/repository';

type Dependencies = {
    repository: TDepartmentRepository;
};

export const buildFindAll = ({ repository }: Dependencies) => {
    const service = async (
        filter: TDepartmentFilterDOM,
        options: TDepartmentOPT,
    ): Promise<TDepartmentDOM[]> => {
        return await repository.findAll(filter, options);
    };

    return service;
};
