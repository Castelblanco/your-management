import {
    TDepartamentDOM,
    TDepartamentFilterDOM,
    TDepartamentOPT,
} from '../entities';

export type TDepartamentRepository = {
    findAll: (
        filter: TDepartamentFilterDOM,
        options: TDepartamentOPT,
    ) => Promise<TDepartamentDOM[]>;
    findOne: (id: string) => Promise<TDepartamentDOM>;
    createOne: (departament: TDepartamentDOM) => Promise<TDepartamentDOM>;
    updateOne: (departament: TDepartamentDOM) => Promise<TDepartamentDOM>;
    deleteOne: (id: string) => Promise<void>;
    createMany: (departaments: TDepartamentDOM[]) => Promise<number>;
};
