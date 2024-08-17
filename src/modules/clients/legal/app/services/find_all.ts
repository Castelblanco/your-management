import type {
    TLegalClientDOM,
    TLegalClientFilterDOM,
} from '@clients_legal/domain/entities';
import type { Dependencies } from '.';

export const buildFindAll = ({ repository }: Dependencies) => {
    const service = async (filter: TLegalClientFilterDOM): Promise<TLegalClientDOM[]> => {
        return await repository.findAll(filter);
    };

    return service;
};
