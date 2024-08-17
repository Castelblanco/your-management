import type { TLegalClientDOM, TLegalClientFilterDOM } from '../entities';

export type TLegalClientRepository = {
    findAll: (filter: TLegalClientFilterDOM) => Promise<TLegalClientDOM[]>;
    findOne: (id: string) => Promise<TLegalClientDOM>;
    count: (filter: TLegalClientFilterDOM) => Promise<number>;
    createOne: (client: TLegalClientDOM) => Promise<TLegalClientDOM>;
    createMany: (clients: TLegalClientDOM[]) => Promise<number>;
    updateOne: (client: TLegalClientDOM) => Promise<TLegalClientDOM>;
    deleteOne: (id: string) => Promise<void>;
};
