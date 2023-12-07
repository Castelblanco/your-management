import {
    TPointSaleDOM,
    TPointSaleFilterDOM,
    TPointSaleOPT,
} from '@point_sales/domain/entities';
import { buildCreateOne } from './create_one';
import { TPointSaleRepository } from '@point_sales/domain/repository';
import { buildFindAll } from './find_all';
import { buildFindOne } from './find_one';
import { buildUpdateOne } from './update_one';
import { buildDeleteOne } from './delete_one';
import { buildCreateMany } from './create_many';

export class PointSalesServices {
    findAll: (
        filter: TPointSaleFilterDOM,
        options: TPointSaleOPT,
    ) => Promise<TPointSaleDOM[]>;
    findOne: (id: string, users?: boolean) => Promise<TPointSaleDOM>;
    createOne: (pointSale: TPointSaleDOM) => Promise<TPointSaleDOM>;
    updateOne: (pointSale: TPointSaleDOM) => Promise<TPointSaleDOM>;
    deleteOne: (id: string) => Promise<void>;
    createMany: (pointSales: TPointSaleDOM[]) => Promise<number>;

    constructor(repository: TPointSaleRepository, createId: () => string) {
        this.findAll = buildFindAll({ repository });
        this.findOne = buildFindOne({ repository });
        this.createOne = buildCreateOne({ createId, repository });
        this.updateOne = buildUpdateOne({ repository });
        this.deleteOne = buildDeleteOne({ repository });
        this.createMany = buildCreateMany({ repository, createId });
    }
}
