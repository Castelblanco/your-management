import type { TPointSaleFilterDOM } from 'modules/points_sale/domain/entities';
import { TDependencies } from '.';

export const buildCount = ({ repository }: TDependencies) => {
    const service = async (filter: TPointSaleFilterDOM): Promise<number> => {
        return await repository.count(filter);
    };

    return service;
};
