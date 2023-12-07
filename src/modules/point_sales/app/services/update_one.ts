import { TPointSaleDOM } from '@point_sales/domain/entities';
import { TPointSaleRepository } from '@point_sales/domain/repository';

type Dependencies = {
    repository: TPointSaleRepository;
};

export const buildUpdateOne = ({ repository }: Dependencies) => {
    const service = async (pointSale: TPointSaleDOM) => {
        return await repository.updateOne(pointSale);
    };

    return service;
};
