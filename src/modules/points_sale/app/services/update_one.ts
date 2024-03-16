import type { TPointSaleDOM } from 'modules/points_sale/domain/entities';
import type { TPointSaleRepository } from 'modules/points_sale/domain/repository';

type Dependencies = {
    repository: TPointSaleRepository;
};

export const buildUpdateOne = ({ repository }: Dependencies) => {
    const service = async (pointSale: TPointSaleDOM): Promise<TPointSaleDOM> => {
        return await repository.updateOne(pointSale);
    };

    return service;
};
