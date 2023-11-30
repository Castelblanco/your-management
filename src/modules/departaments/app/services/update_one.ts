import { TDepartamentDOM } from '@departaments/domain/entities';
import { TDepartamentRepository } from '@departaments/domain/repository';

type Dependencies = {
    repository: TDepartamentRepository;
};

export const buildUpdateOne = ({ repository }: Dependencies) => {
    const service = async (departament: TDepartamentDOM) => {
        return await repository.updateOne(departament);
    };

    return service;
};
