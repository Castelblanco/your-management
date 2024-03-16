import type { TPointSaleDOM } from 'modules/points_sale/domain/entities';
import type { TPointSaleRepository } from 'modules/points_sale/domain/repository';

type Dependencies = {
    repository: TPointSaleRepository;
    createId: () => string;
};

export const buildCreateMany = ({ createId, repository }: Dependencies) => {
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
