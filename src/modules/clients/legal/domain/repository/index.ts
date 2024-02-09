import type {
    TLegalClientDOM,
    TLegalClientFilterDOM,
    TLegalClientOPT,
} from '../entities';

export type TLegalClientRepository = {
    findAll: (
        filter: TLegalClientFilterDOM,
        option: TLegalClientOPT,
    ) => Promise<TLegalClientDOM[]>;
    findOne: (id: string, status?: boolean) => Promise<TLegalClientDOM>;
    createOne: (client: TLegalClientDOM) => Promise<TLegalClientDOM>;
    createMany: (clients: TLegalClientDOM[]) => Promise<number>;
    updateOne: (client: TLegalClientDOM) => Promise<TLegalClientDOM>;
    deleteOne: (id: string) => Promise<void>;
};
