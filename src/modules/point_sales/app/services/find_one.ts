import type { TPointSaleDOM } from '@point_sales/domain/entities';
import type { TPointSaleRepository } from '@point_sales/domain/repository';

type Dependencies = {
    repository: TPointSaleRepository;
};

export const buildFindOne = ({
    repository,
}: Dependencies): ((id: string, users?: boolean) => Promise<TPointSaleDOM>) => {
    const service = async (id: string, users?: boolean): Promise<TPointSaleDOM> => {
        return await repository.findOne(id, users);
    };

    return service;
};
