import type { TPointSaleDOM } from 'modules/points_sale/domain/entities';
import { TDependencies } from '.';

export const buildCreateMany = ({ createId, repository }: TDependencies) => {
    const service = async (pointSale: TPointSaleDOM[]): Promise<number> => {
        return await repository.createMany(
            pointSale.map((point) => {
                point.id = createId();
                return point;
            }),
        );
    };

    return service;
};
