import type { TPointSaleDOM, TPointSaleFilterDOM, TPointSaleOPT } from '../entities';

export type TPointSaleRepository = {
    findAll: (
        filter: TPointSaleFilterDOM,
        options: TPointSaleOPT,
    ) => Promise<TPointSaleDOM[]>;
    findOne: (id: string, users?: boolean) => Promise<TPointSaleDOM>;
    createOne: (pointSale: TPointSaleDOM) => Promise<TPointSaleDOM>;
    updateOne: (pointSale: TPointSaleDOM) => Promise<TPointSaleDOM>;
    deleteOne: (id: string) => Promise<void>;
    createMany: (pointsSale: TPointSaleDOM[]) => Promise<number>;
};
