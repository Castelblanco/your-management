import type { TPointSaleDOM } from 'modules/points_sale/domain/entities';
import type { TPointSaleRepository } from 'modules/points_sale/domain/repository';

type Dependencies = {
    repository: TPointSaleRepository;
};

export const buildFindOne = ({ repository }: Dependencies) => {
    const service = async (id: string, users?: boolean): Promise<TPointSaleDOM> => {
        return await repository.findOne(id, users);
    };

    return service;
};
