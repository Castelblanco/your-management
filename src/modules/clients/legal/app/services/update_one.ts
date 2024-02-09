import type { TLegalClientDOM } from '@clients_legal/domain/entities';
import type { Dependencies } from '.';

export const buildUpdateOne = ({ repository }: Dependencies) => {
    const service = async (client: TLegalClientDOM): Promise<TLegalClientDOM> => {
        return await repository.updateOne(client);
    };

    return service;
};
