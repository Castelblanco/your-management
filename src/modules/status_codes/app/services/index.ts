import { TStatusCodeDOM } from '@status_codes/domain/entities';
import { TStatusCodeRepository } from '@status_codes/domain/repository';
import { buildGetAll } from './find_all';
import { buildCreateOne } from './create_one';

export class StatusCodeServices {
    findAll: () => Promise<TStatusCodeDOM[]>;
    createOne: (status: TStatusCodeDOM) => Promise<TStatusCodeDOM>;

    constructor(repository: TStatusCodeRepository, createId: () => string) {
        this.findAll = buildGetAll({ repository });
        this.createOne = buildCreateOne({ repository, createId });
    }
}
