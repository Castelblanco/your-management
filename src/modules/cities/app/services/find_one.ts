import type { TCityDOM } from '@cities/domain/entities';
import type { TCitiesRepository } from '@cities/domain/repository';

type Dependencies = {
    repository: TCitiesRepository;
};

export const buildFindOne = ({ repository }: Dependencies) => {
    const service = async (id: string, pointSales?: boolean): Promise<TCityDOM> => {
        return await repository.findOne(id, pointSales);
    };
    return service;
};
