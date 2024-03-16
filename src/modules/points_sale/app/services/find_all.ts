import type {
    TPointSaleDOM,
    TPointSaleFilterDOM,
    TPointSaleOPT,
} from 'modules/points_sale/domain/entities';
import type { TPointSaleRepository } from 'modules/points_sale/domain/repository';

type Dependencies = {
    repository: TPointSaleRepository;
};

export const buildFindAll = ({ repository }: Dependencies) => {
    const service = async (
        filter: TPointSaleFilterDOM,
        options: TPointSaleOPT,
    ): Promise<TPointSaleDOM[]> => {
        return await repository.findAll(filter, options);
    };

    return service;
};
