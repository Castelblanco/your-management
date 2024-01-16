import type { TPointSaleDOM } from '@point_sales/domain/entities';
import type { TPointSaleRepository } from '@point_sales/domain/repository';

type Dependencies = {
    repository: TPointSaleRepository;
    createId: () => string;
};

export const buildCreateMany = ({
    createId,
    repository,
}: Dependencies): ((pointSale: TPointSaleDOM[]) => Promise<number>) => {
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
