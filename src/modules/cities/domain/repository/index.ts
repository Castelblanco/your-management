import type { TCityDOM, TCityFilterDOM, TCityOPT } from '../entities';

export type TCitiesRepository = {
    findAll: (filter: TCityFilterDOM, options: TCityOPT) => Promise<TCityDOM[]>;
    findOne: (id: string, pointSales?: boolean) => Promise<TCityDOM>;
    createOne: (department: TCityDOM) => Promise<TCityDOM>;
    updateOne: (department: TCityDOM) => Promise<TCityDOM>;
    deleteOne: (id: string) => Promise<void>;
    createMany: (department: TCityDOM[]) => Promise<number>;
};
