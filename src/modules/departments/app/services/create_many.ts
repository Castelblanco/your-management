import type { TDepartmentDOM } from 'modules/departments/domain/entities';
import type { TDepartmentRepository } from 'modules/departments/domain/repository';

type Dependencies = {
    repository: TDepartmentRepository;
    createId: () => string;
};

export const buildCreateMany = ({ repository, createId }: Dependencies) => {
    const service = async (departments: TDepartmentDOM[]): Promise<number> => {
        return await repository.createMany(
            departments.map((d) => {
                d.id = createId();
                return d;
            }),
        );
    };

    return service;
};
