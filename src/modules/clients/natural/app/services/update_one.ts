import { type TNaturalClientDOM } from '@clients_natural/domain/entities';
import { type Dependencies } from '.';

export const buildUpdateOne = ({ repository }: Dependencies) => {
    const service = async (client: TNaturalClientDOM): Promise<TNaturalClientDOM> => {
        return await repository.updateOne(client);
    };

    return service;
};
