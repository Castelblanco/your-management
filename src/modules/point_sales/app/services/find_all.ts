import {
    TPointSaleFilterDOM,
    TPointSaleOPT,
} from '@point_sales/domain/entities';
import { TPointSaleRepository } from '@point_sales/domain/repository';

type Dependencies = {
    repository: TPointSaleRepository;
};

export const buildFindAll = ({ repository }: Dependencies) => {
    const service = async (
        filter: TPointSaleFilterDOM,
        options: TPointSaleOPT,
    ) => {
        return await repository.findAll(filter, options);
    };

    return service;
};
