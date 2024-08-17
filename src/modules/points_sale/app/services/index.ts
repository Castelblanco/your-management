import type {
    TPointSaleDOM,
    TPointSaleFilterDOM,
} from 'modules/points_sale/domain/entities';
import type { TPointSaleRepository } from 'modules/points_sale/domain/repository';

import { buildCreateOne } from './create_one';
import { buildFindAll } from './find_all';
import { buildFindOne } from './find_one';
import { buildUpdateOne } from './update_one';
import { buildDeleteOne } from './delete_one';
import { buildCreateMany } from './create_many';
import { buildCount } from './count';

export type TDependencies = {
    repository: TPointSaleRepository;
    createId: () => string;
};

export class PointsSaleServices {
    findAll: (filter: TPointSaleFilterDOM) => Promise<TPointSaleDOM[]>;
    findOne: (id: string) => Promise<TPointSaleDOM>;
    count: (filter: TPointSaleFilterDOM) => Promise<number>;
    createOne: (pointSale: TPointSaleDOM) => Promise<TPointSaleDOM>;
    updateOne: (pointSale: TPointSaleDOM) => Promise<TPointSaleDOM>;
    deleteOne: (id: string) => Promise<void>;
    createMany: (pointsSale: TPointSaleDOM[]) => Promise<number>;

    constructor(dependencies: TDependencies) {
        this.findAll = buildFindAll(dependencies);
        this.findOne = buildFindOne(dependencies);
        this.count = buildCount(dependencies);
        this.createOne = buildCreateOne(dependencies);
        this.updateOne = buildUpdateOne(dependencies);
        this.deleteOne = buildDeleteOne(dependencies);
        this.createMany = buildCreateMany(dependencies);
    }
}
