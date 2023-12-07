import { TCityDOM } from '@cities/domain/entities';
import { TCitiesRepository } from '@cities/domain/repository';

type Dependencies = {
    repository: TCitiesRepository;
    createId: () => string;
};

export const buildCreateMany = ({ repository, createId }: Dependencies) => {
    const service = async (cities: TCityDOM[]) => {
        return await repository.createMany(
            cities.map((city) => {
                city.id = createId();
                return city;
            }),
        );
    };
    return service;
};
