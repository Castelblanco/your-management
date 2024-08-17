import {
    type TNaturalClientDOM,
    type TNaturalClientFilterDOM,
} from '@clients_natural/domain/entities';
import { type Dependencies } from '.';

export const buildFindAll = ({ repository }: Dependencies) => {
    const service = async (
        filter: TNaturalClientFilterDOM,
    ): Promise<TNaturalClientDOM[]> => {
        return await repository.findAll(filter);
    };

    return service;
};
