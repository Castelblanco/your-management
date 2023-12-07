import { TPointSaleRepository } from '@point_sales/domain/repository';

type Dependencies = {
    repository: TPointSaleRepository;
};

export const buildDeleteOne = ({ repository }: Dependencies) => {
    const service = async (id: string) => {
        return await repository.deleteOne(id);
    };

    return service;
};
