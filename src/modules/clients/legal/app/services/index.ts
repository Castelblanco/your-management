import type {
    TLegalClientDOM,
    TLegalClientFilterDOM,
} from '@clients_legal/domain/entities';
import type { TLegalClientRepository } from '@clients_legal/domain/repository';
import { buildFindAll } from './find_all';
import { buildFindOne } from './find_one';
import { buildCreateMany } from './create_many';
import { buildCreateOne } from './create_one';
import { buildUpdateOne } from './update_one';
import { buildDeleteOne } from './delete_one';
import { buildCount } from './count';

export type Dependencies = {
    repository: TLegalClientRepository;
    createId: () => string;
};

export class LegalClientServices {
    findAll: (filter: TLegalClientFilterDOM) => Promise<TLegalClientDOM[]>;
    findOne: (id: string) => Promise<TLegalClientDOM>;
    count: (filter: TLegalClientFilterDOM) => Promise<number>;
    createOne: (client: TLegalClientDOM) => Promise<TLegalClientDOM>;
    createMany: (clients: TLegalClientDOM[]) => Promise<number>;
    updateOne: (client: TLegalClientDOM) => Promise<TLegalClientDOM>;
    deleteOne: (id: string) => Promise<void>;

    constructor(dependencies: Dependencies) {
        this.findAll = buildFindAll(dependencies);
        this.findOne = buildFindOne(dependencies);
        this.count = buildCount(dependencies);
        this.createOne = buildCreateOne(dependencies);
        this.createMany = buildCreateMany(dependencies);
        this.updateOne = buildUpdateOne(dependencies);
        this.deleteOne = buildDeleteOne(dependencies);
    }
}
