import { TCityDOM } from '@cities/domain/entities';
import { TCitiesRepository } from '@cities/domain/repository';

type Dependencies = {
    repository: TCitiesRepository;
};

export const buildUpdateOne = ({ repository }: Dependencies) => {
    const service = async (city: TCityDOM) => {
        return await repository.updateOne(city);
    };
    return service;
};
