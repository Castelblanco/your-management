import type { TCityDOM, TCityFilterDOM, TCityOPT } from '@cities/domain/entities';
import type { TCitiesRepository } from '@cities/domain/repository';
import { buildFindAll } from './find_all';
import { buildCreateOne } from './create_one';
import { buildFindOne } from './find_one';
import { buildCreateMany } from './create_many';
import { buildUpdateOne } from './update_one';
import { buildDeleteOne } from './delete_one';

export class CitiesServices {
    findAll: (filter: TCityFilterDOM, options: TCityOPT) => Promise<TCityDOM[]>;
    findOne: (id: string, pointSales?: boolean) => Promise<TCityDOM>;
    createOne: (departament: TCityDOM) => Promise<TCityDOM>;
    createMany: (departament: TCityDOM[]) => Promise<number>;
    updateOne: (departament: TCityDOM) => Promise<TCityDOM>;
    deleteOne: (id: string) => Promise<void>;

    constructor(repository: TCitiesRepository, createId: () => string) {
        this.findAll = buildFindAll({ repository });
        this.findOne = buildFindOne({ repository });
        this.createOne = buildCreateOne({ repository, createId });
        this.createMany = buildCreateMany({ repository, createId });
        this.updateOne = buildUpdateOne({ repository });
        this.deleteOne = buildDeleteOne({ repository });
    }
}
