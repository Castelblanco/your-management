import type {
    TPointSaleDOM,
    TPointSaleFilterDOM,
} from 'modules/points_sale/domain/entities';
import { TDependencies } from '.';

export const buildFindAll = ({ repository }: TDependencies) => {
    const service = async (filter: TPointSaleFilterDOM): Promise<TPointSaleDOM[]> => {
        return await repository.findAll(filter);
    };

    return service;
};
