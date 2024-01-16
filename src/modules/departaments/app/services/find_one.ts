import type { TDepartamentDOM } from '@departaments/domain/entities';
import type { TDepartamentRepository } from '@departaments/domain/repository';

type Dependencies = {
    repository: TDepartamentRepository;
};

export const buildFindOne = ({
    repository,
}: Dependencies): ((id: string) => Promise<TDepartamentDOM>) => {
    const service = async (id: string): Promise<TDepartamentDOM> => {
        return await repository.findOne(id);
    };

    return service;
};
