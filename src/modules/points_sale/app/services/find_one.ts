import type { TPointSaleDOM } from 'modules/points_sale/domain/entities';
import { TDependencies } from '.';

export const buildFindOne = ({ repository }: TDependencies) => {
    const service = async (id: string): Promise<TPointSaleDOM> => {
        return await repository.findOne(id);
    };

    return service;
};
