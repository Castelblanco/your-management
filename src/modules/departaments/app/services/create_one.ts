import type { TDepartamentDOM } from '@departaments/domain/entities';
import type { TDepartamentRepository } from '@departaments/domain/repository';

type Dependencies = {
    repository: TDepartamentRepository;
    createId: () => string;
};

export const buildCreateOne = ({
    createId,
    repository,
}: Dependencies): ((departament: TDepartamentDOM) => Promise<TDepartamentDOM>) => {
    const service = async (departament: TDepartamentDOM): Promise<TDepartamentDOM> => {
        departament.id = createId();
        return await repository.createOne(departament);
    };

    return service;
};
