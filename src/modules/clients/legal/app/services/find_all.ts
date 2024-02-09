import type {
    TLegalClientDOM,
    TLegalClientFilterDOM,
    TLegalClientOPT,
} from '@clients_legal/domain/entities';
import type { Dependencies } from '.';

export const buildFindAll = ({ repository }: Dependencies) => {
    const service = async (
        filter: TLegalClientFilterDOM,
        option: TLegalClientOPT,
    ): Promise<TLegalClientDOM[]> => {
        return await repository.findAll(filter, option);
    };

    return service;
};
