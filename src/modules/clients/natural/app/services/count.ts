import { type TNaturalClientFilterDOM } from '@clients_natural/domain/entities';
import { type Dependencies } from '.';

export const buildCount = ({ repository }: Dependencies) => {
    const service = async (filter: TNaturalClientFilterDOM): Promise<number> => {
        return await repository.count(filter);
    };

    return service;
};
