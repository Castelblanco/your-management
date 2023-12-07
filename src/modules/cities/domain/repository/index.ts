import { TCityDOM, TCityFilterDOM, TCityOPT } from '../entities';

export type TCitiesRepository = {
    findAll: (filter: TCityFilterDOM, options: TCityOPT) => Promise<TCityDOM[]>;
    findOne: (id: string, pointSales?: boolean) => Promise<TCityDOM>;
    createOne: (departament: TCityDOM) => Promise<TCityDOM>;
    updateOne: (departament: TCityDOM) => Promise<TCityDOM>;
    deleteOne: (id: string) => Promise<void>;
    createMany: (departament: TCityDOM[]) => Promise<number>;
};
