import type {
    TNaturalClientDOM,
    TNaturalClientFilterDOM,
    TNaturalClientOPT,
} from '../entities';

export type TNaturalClientRepository = {
    findAll: (
        filter: TNaturalClientFilterDOM,
        options: TNaturalClientOPT,
    ) => Promise<TNaturalClientDOM[]>;
    findOne: (id: string, status?: boolean) => Promise<TNaturalClientDOM>;
    createOne: (client: TNaturalClientDOM) => Promise<TNaturalClientDOM>;
    createMany: (clients: TNaturalClientDOM[]) => Promise<number>;
    updateOne: (client: TNaturalClientDOM) => Promise<TNaturalClientDOM>;
    deleteOne: (id: string) => Promise<void>;
};
