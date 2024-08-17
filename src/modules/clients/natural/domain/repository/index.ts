import type { TNaturalClientDOM, TNaturalClientFilterDOM } from '../entities';

export type TNaturalClientRepository = {
    findAll: (filter: TNaturalClientFilterDOM) => Promise<TNaturalClientDOM[]>;
    findOne: (id: string) => Promise<TNaturalClientDOM>;
    count: (filter: TNaturalClientFilterDOM) => Promise<number>;
    createOne: (client: TNaturalClientDOM) => Promise<TNaturalClientDOM>;
    createMany: (clients: TNaturalClientDOM[]) => Promise<number>;
    updateOne: (client: TNaturalClientDOM) => Promise<TNaturalClientDOM>;
    deleteOne: (id: string) => Promise<void>;
};
