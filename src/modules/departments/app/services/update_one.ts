import type { TDepartmentDOM } from 'modules/departments/domain/entities';
import type { TDepartmentRepository } from 'modules/departments/domain/repository';

type Dependencies = {
    repository: TDepartmentRepository;
};

export const buildUpdateOne = ({ repository }: Dependencies) => {
    const service = async (department: TDepartmentDOM): Promise<TDepartmentDOM> => {
        return await repository.updateOne(department);
    };

    return service;
};
