import type { TCityDOM } from '@cities/domain/entities';
import type { TCitiesRepository } from '@cities/domain/repository';

type Dependencies = {
    repository: TCitiesRepository;
};

export const buildUpdateOne = ({
    repository,
}: Dependencies): ((city: TCityDOM) => Promise<TCityDOM>) => {
    const service = async (city: TCityDOM): Promise<TCityDOM> => {
        return await repository.updateOne(city);
    };
    return service;
};
