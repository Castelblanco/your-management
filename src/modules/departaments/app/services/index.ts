import { buildFindAll } from './find_all';
import { buildCreateOne } from './create_one';
import { buildFindOne } from './find_one';
import { buildUpdateOne } from './update_one';
import { buildDeleteOne } from './delete_one';
import { buildCreateMany } from './create_many';
import {
    TDepartamentDOM,
    TDepartamentFilterDOM,
    TDepartamentOPT,
} from '@departaments/domain/entities';
import { TDepartamentRepository } from '@departaments/domain/repository';

export class DepartamentsServices {
    findAll: (
        filter: TDepartamentFilterDOM,
        options: TDepartamentOPT,
    ) => Promise<TDepartamentDOM[]>;
    findOne: (id: string) => Promise<TDepartamentDOM>;
    createOne: (role: TDepartamentDOM) => Promise<TDepartamentDOM>;
    updateOne: (role: TDepartamentDOM) => Promise<TDepartamentDOM>;
    deleteOne: (id: string) => Promise<void>;
    createMany: (roles: TDepartamentDOM[]) => Promise<number>;

    constructor(repository: TDepartamentRepository, createId: () => string) {
        this.findAll = buildFindAll({ repository });
        this.findOne = buildFindOne({ repository });
        this.createOne = buildCreateOne({ repository, createId });
        this.updateOne = buildUpdateOne({ repository });
        this.deleteOne = buildDeleteOne({ repository });
        this.createMany = buildCreateMany({ createId, repository });
    }
}
