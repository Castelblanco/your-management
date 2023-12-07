import { TCitiesRepository } from '@cities/domain/repository';

type Dependencies = {
    repository: TCitiesRepository;
};

export const buildFindOne = ({ repository }: Dependencies) => {
    const service = async (id: string, pointSales?: boolean) => {
        return await repository.findOne(id, pointSales);
    };
    return service;
};
