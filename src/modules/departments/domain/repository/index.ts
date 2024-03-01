import type { TDepartmentDOM, TDepartmentFilterDOM, TDepartmentOPT } from '../entities';

export type TDepartmentRepository = {
    findAll: (
        filter: TDepartmentFilterDOM,
        options: TDepartmentOPT,
    ) => Promise<TDepartmentDOM[]>;
    findOne: (id: string) => Promise<TDepartmentDOM>;
    createOne: (department: TDepartmentDOM) => Promise<TDepartmentDOM>;
    updateOne: (department: TDepartmentDOM) => Promise<TDepartmentDOM>;
    deleteOne: (id: string) => Promise<void>;
    createMany: (departments: TDepartmentDOM[]) => Promise<number>;
};
