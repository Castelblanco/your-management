import type { TDepartmentRepository } from 'modules/departments/domain/repository';

type Dependencies = {
    repository: TDepartmentRepository;
};

export const buildDeleteOne = ({ repository }: Dependencies) => {
    const service = async (id: string): Promise<void> => {
        await repository.deleteOne(id);
    };

    return service;
};
