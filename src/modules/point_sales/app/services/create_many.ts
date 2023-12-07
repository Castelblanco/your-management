import { TPointSaleDOM } from '@point_sales/domain/entities';
import { TPointSaleRepository } from '@point_sales/domain/repository';

type Dependencies = {
    repository: TPointSaleRepository;
    createId: () => string;
};

export const buildCreateMany = ({ createId, repository }: Dependencies) => {
    const service = async (pointSale: TPointSaleDOM[]) => {
        return await repository.createMany(
            pointSale.map((point) => {
                point.id = createId();
                return point;
            }),
        );
    };

    return service;
};
