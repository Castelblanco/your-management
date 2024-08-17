import type { TPointSaleDOM } from 'modules/points_sale/domain/entities';
import { TDependencies } from '.';

export const buildUpdateOne = ({ repository }: TDependencies) => {
    const service = async (pointSale: TPointSaleDOM): Promise<TPointSaleDOM> => {
        return await repository.updateOne(pointSale);
    };

    return service;
};
