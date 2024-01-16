import type { TPointSaleDOM } from '@point_sales/domain/entities';
import type { TPointSaleRepository } from '@point_sales/domain/repository';

type Dependencies = {
    repository: TPointSaleRepository;
};

export const buildUpdateOne = ({
    repository,
}: Dependencies): ((pointSale: TPointSaleDOM) => Promise<TPointSaleDOM>) => {
    const service = async (pointSale: TPointSaleDOM): Promise<TPointSaleDOM> => {
        return await repository.updateOne(pointSale);
    };

    return service;
};
