import { TDepartamentDOM } from '@departaments/domain/entities';
import { TDepartamentRepository } from '@departaments/domain/repository';

type Dependencies = {
    repository: TDepartamentRepository;
    createId: () => string;
};

export const buildCreateOne = ({ createId, repository }: Dependencies) => {
    const service = async (departament: TDepartamentDOM) => {
        departament.id = createId();
        return await repository.createOne(departament);
    };

    return service;
};
