import { type TNaturalClientDOM } from '@clients_natural/domain/entities';
import { type Dependencies } from '.';

export const buildCreateMany = ({ repository, createId }: Dependencies) => {
    const service = async (clients: TNaturalClientDOM[]): Promise<number> => {
        return await repository.createMany(
            clients.map((client) => {
                client.id = createId();
                return client;
            }),
        );
    };

    return service;
};
