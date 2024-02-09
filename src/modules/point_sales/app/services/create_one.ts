import type { TPointSaleDOM } from '@point_sales/domain/entities';
import type { TPointSaleRepository } from '@point_sales/domain/repository';

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
