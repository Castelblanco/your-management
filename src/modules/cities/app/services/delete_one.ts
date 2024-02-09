import type { TCitiesRepository } from '@cities/domain/repository';

type Dependencies = {
    repository: TCitiesRepository;
};

export const buildDeleteOne = ({ repository }: Dependencies) => {
    const service = async (id: string): Promise<void> => {
        await repository.deleteOne(id);
    };
    return service;
};
