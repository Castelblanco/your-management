import type { TDepartamentRepository } from '@departaments/domain/repository';

type Dependencies = {
    repository: TDepartamentRepository;
};

export const buildDeleteOne = ({
    repository,
}: Dependencies): ((id: string) => Promise<void>) => {
    const service = async (id: string): Promise<void> => {
        await repository.deleteOne(id);
    };

    return service;
};
