import { TCityDOM } from '@cities/domain/entities';
import { TCitiesRepository } from '@cities/domain/repository';

type Dependencies = {
    repository: TCitiesRepository;
    createId: () => string;
};

export const buildCreateOne = ({ repository, createId }: Dependencies) => {
    const service = async (city: TCityDOM) => {
        city.id = createId();
        return await repository.createOne(city);
    };
    return service;
};
