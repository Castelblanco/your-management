import { type TNaturalClientDOM } from '@clients_natural/domain/entities';
import { type Dependencies } from '.';

export const buildCreateOne = ({ repository, createId }: Dependencies) => {
    const service = async (client: TNaturalClientDOM): Promise<TNaturalClientDOM> => {
        client.id = createId();
        return await repository.createOne(client);
    };

    return service;
};
