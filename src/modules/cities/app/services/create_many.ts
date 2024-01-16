import type { TCityDOM } from '@cities/domain/entities';
import type { TCitiesRepository } from '@cities/domain/repository';

type Dependencies = {
    repository: TCitiesRepository;
    createId: () => string;
};

export const buildCreateMany = ({
    repository,
    createId,
}: Dependencies): ((cities: TCityDOM[]) => Promise<number>) => {
    const service = async (cities: TCityDOM[]): Promise<number> => {
        return await repository.createMany(
            cities.map((city) => {
                city.id = createId();
                return city;
            }),
        );
    };
    return service;
};
