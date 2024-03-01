import type { TDepartmentDOM } from 'modules/departments/domain/entities';
import type { TDepartmentRepository } from 'modules/departments/domain/repository';

type Dependencies = {
    repository: TDepartmentRepository;
};

export const buildFindOne = ({ repository }: Dependencies) => {
    const service = async (id: string): Promise<TDepartmentDOM> => {
        return await repository.findOne(id);
    };

    return service;
};
