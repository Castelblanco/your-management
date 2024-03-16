import type { TPointSaleDOM } from 'modules/points_sale/domain/entities';
import type { TPointSaleRepository } from 'modules/points_sale/domain/repository';

type Dependencies = {
    repository: TPointSaleRepository;
    createId: () => string;
};

export const buildCreateOne = ({ createId, repository }: Dependencies) => {
    const service = async (pointSale: TPointSaleDOM): Promise<TPointSaleDOM> => {
        pointSale.id = createId();
        return await repository.createOne(pointSale);
    };

    return service;
};
