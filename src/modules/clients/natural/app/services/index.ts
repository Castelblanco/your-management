import {
    type TNaturalClientDOM,
    type TNaturalClientFilterDOM,
    type TNaturalClientOPT,
} from '@clients_natural/domain/entities';
import { type TNaturalClientRepository } from '@clients_natural/domain/repository';
import { buildFindAll } from './find_all';
import { buildFindOne } from './find_one';
import { buildCreateOne } from './create_one';
import { buildCreateMany } from './create_many';
import { buildUpdateOne } from './update_one';
import { buildDeleteOne } from './delete_one';

export type Dependencies = {
    repository: TNaturalClientRepository;
    createId: () => string;
};

export class NaturalClientServices {
    findAll: (
        filter: TNaturalClientFilterDOM,
        options: TNaturalClientOPT,
    ) => Promise<TNaturalClientDOM[]>;

    findOne: (id: string, status?: boolean) => Promise<TNaturalClientDOM>;
    createOne: (client: TNaturalClientDOM) => Promise<TNaturalClientDOM>;
    createMany: (clients: TNaturalClientDOM[]) => Promise<number>;
    updateOne: (client: TNaturalClientDOM) => Promise<TNaturalClientDOM>;
    deleteOne: (id: string) => Promise<void>;

    constructor(dependencies: Dependencies) {
        this.findAll = buildFindAll(dependencies);
        this.findOne = buildFindOne(dependencies);
        this.createOne = buildCreateOne(dependencies);
        this.createMany = buildCreateMany(dependencies);
        this.updateOne = buildUpdateOne(dependencies);
        this.deleteOne = buildDeleteOne(dependencies);
    }
}
