import type { TPointSaleDOM } from 'modules/points_sale/domain/entities';
import { TDependencies } from '.';

export const buildCreateOne = ({ createId, repository }: TDependencies) => {
    const service = async (pointSale: TPointSaleDOM): Promise<TPointSaleDOM> => {
        pointSale.id = createId();
        return await repository.createOne(pointSale);
    };

    return service;
};
