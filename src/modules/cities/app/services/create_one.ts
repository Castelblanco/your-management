import type { TCityDOM } from '@cities/domain/entities';
import type { TCitiesRepository } from '@cities/domain/repository';

type Dependencies = {
    repository: TCitiesRepository;
    createId: () => string;
};

export const buildCreateOne = ({
    repository,
    createId,
}: Dependencies): ((city: TCityDOM) => Promise<TCityDOM>) => {
    const service = async (city: TCityDOM): Promise<TCityDOM> => {
        city.id = createId();
        return await repository.createOne(city);
    };
    return service;
};
