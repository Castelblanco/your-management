import type { TStatusCodeDOM } from '../entities';

export type TStatusCodeOperations = {
    findAll: () => Promise<TStatusCodeDOM[]>;
    findOne: (id: string) => Promise<TStatusCodeDOM>;
    createOne: (status: TStatusCodeDOM) => Promise<TStatusCodeDOM>;
    updateOne: (status: TStatusCodeDOM) => Promise<TStatusCodeDOM>;
    deleteOne: (id: string) => Promise<void>;
    createMany: (status: TStatusCodeDOM[]) => Promise<number>;
};

export type TStatusCodeRepository = {
    cities: TStatusCodeOperations;
    department: TStatusCodeOperations;
    point_sales: TStatusCodeOperations;
    users: TStatusCodeOperations;
    clients: TStatusCodeOperations;
    guide_service: TStatusCodeOperations;
};
