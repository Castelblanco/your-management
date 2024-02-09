import type { TLegalClientDOM } from '@clients_legal/domain/entities';
import type { Dependencies } from '.';

export const buildCreateMany = ({ repository, createId }: Dependencies) => {
    const service = async (clients: TLegalClientDOM[]): Promise<number> => {
        return await repository.createMany(
            clients.map((client) => {
                client.id = createId();
                return client;
            }),
        );
    };

    return service;
};
