import type { TDepartamentDOM } from '@departaments/domain/entities';
import type { TDepartamentRepository } from '@departaments/domain/repository';

type Dependencies = {
    repository: TDepartamentRepository;
};

export const buildUpdateOne = ({
    repository,
}: Dependencies): ((departament: TDepartamentDOM) => Promise<TDepartamentDOM>) => {
    const service = async (departament: TDepartamentDOM): Promise<TDepartamentDOM> => {
        return await repository.updateOne(departament);
    };

    return service;
};
