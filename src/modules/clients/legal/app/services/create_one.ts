import type { TLegalClientDOM } from '@clients_legal/domain/entities';
import type { Dependencies } from '.';

export const buildCreateOne = ({ repository, createId }: Dependencies) => {
    const service = async (client: TLegalClientDOM): Promise<TLegalClientDOM> => {
        client.id = createId();
        return await repository.createOne(client);
    };

    return service;
};
