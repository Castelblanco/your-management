import type { TDepartmentDOM } from 'modules/departments/domain/entities';
import type { TDepartmentRepository } from 'modules/departments/domain/repository';

type Dependencies = {
    repository: TDepartmentRepository;
    createId: () => string;
};

export const buildCreateOne = ({ createId, repository }: Dependencies) => {
    const service = async (department: TDepartmentDOM): Promise<TDepartmentDOM> => {
        department.id = createId();
        return await repository.createOne(department);
    };

    return service;
};
