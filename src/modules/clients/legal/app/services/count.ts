import type { TLegalClientFilterDOM } from '@clients_legal/domain/entities';
import type { Dependencies } from '.';

export const buildCount = ({ repository }: Dependencies) => {
    const service = async (filter: TLegalClientFilterDOM): Promise<number> => {
        return await repository.count(filter);
    };

    return service;
};
