import {
    type TNaturalClientDOM,
    type TNaturalClientFilterDOM,
    type TNaturalClientOPT,
} from '@clients_natural/domain/entities';
import { type Dependencies } from '.';

export const buildFindAll = ({ repository }: Dependencies) => {
    const service = async (
        filter: TNaturalClientFilterDOM,
        options: TNaturalClientOPT,
    ): Promise<TNaturalClientDOM[]> => {
        return await repository.findAll(filter, options);
    };

    return service;
};
