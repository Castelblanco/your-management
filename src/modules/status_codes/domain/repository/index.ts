import type { TStatusCodeDOM } from '../entities';

export type TStatusCodeRepository = {
    findAll: () => Promise<TStatusCodeDOM[]>;
    findOne: (id: string) => Promise<TStatusCodeDOM>;
    createOne: (status: TStatusCodeDOM) => Promise<TStatusCodeDOM>;
    updateOne: (status: TStatusCodeDOM) => Promise<TStatusCodeDOM>;
    deleteOne: (id: string) => Promise<void>;
    createMany: (status: TStatusCodeDOM[]) => Promise<number>;
};
