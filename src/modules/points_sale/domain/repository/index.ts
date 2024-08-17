import type { TPointSaleDOM, TPointSaleFilterDOM } from '../entities';

export type TPointSaleRepository = {
    findAll: (filter: TPointSaleFilterDOM) => Promise<TPointSaleDOM[]>;
    findOne: (id: string) => Promise<TPointSaleDOM>;
    count: (filter: TPointSaleFilterDOM) => Promise<number>;
    createOne: (pointSale: TPointSaleDOM) => Promise<TPointSaleDOM>;
    updateOne: (pointSale: TPointSaleDOM) => Promise<TPointSaleDOM>;
    deleteOne: (id: string) => Promise<void>;
    createMany: (pointsSale: TPointSaleDOM[]) => Promise<number>;
};
