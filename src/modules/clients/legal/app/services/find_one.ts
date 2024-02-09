import type { TLegalClientDOM } from '@clients_legal/domain/entities';
import type { Dependencies } from '.';

export const buildFindOne = ({ repository }: Dependencies) => {
    const service = async (id: string, status?: boolean): Promise<TLegalClientDOM> => {
        return await repository.findOne(id, status);
    };

    return service;
};
