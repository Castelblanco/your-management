import type { TPointSaleRepository } from 'modules/points_sale/domain/repository';

type Dependencies = {
    repository: TPointSaleRepository;
};

export const buildDeleteOne = ({ repository }: Dependencies) => {
    const service = async (id: string): Promise<void> => {
        await repository.deleteOne(id);
    };

    return service;
};
