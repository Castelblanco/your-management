import { buildFindAll } from './find_all';
import { buildCreateOne } from './create_one';
import { buildFindOne } from './find_one';
import { buildUpdateOne } from './update_one';
import { buildDeleteOne } from './delete_one';
import { buildCreateMany } from './create_many';
import type {
    TDepartmentDOM,
    TDepartmentFilterDOM,
    TDepartmentOPT,
} from 'modules/departments/domain/entities';
import type { TDepartmentRepository } from 'modules/departments/domain/repository';

export class DepartmentsServices {
    findAll: (
        filter: TDepartmentFilterDOM,
        options: TDepartmentOPT,
    ) => Promise<TDepartmentDOM[]>;

    findOne: (id: string) => Promise<TDepartmentDOM>;
    createOne: (role: TDepartmentDOM) => Promise<TDepartmentDOM>;
    updateOne: (role: TDepartmentDOM) => Promise<TDepartmentDOM>;
    deleteOne: (id: string) => Promise<void>;
    createMany: (roles: TDepartmentDOM[]) => Promise<number>;

    constructor(repository: TDepartmentRepository, createId: () => string) {
        this.findAll = buildFindAll({ repository });
        this.findOne = buildFindOne({ repository });
        this.createOne = buildCreateOne({ repository, createId });
        this.updateOne = buildUpdateOne({ repository });
        this.deleteOne = buildDeleteOne({ repository });
        this.createMany = buildCreateMany({ createId, repository });
    }
}
