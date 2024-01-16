import type { TPointSaleRepository } from '@point_sales/domain/repository';

type Dependencies = {
    repository: TPointSaleRepository;
};

export const buildDeleteOne = ({
    repository,
}: Dependencies): ((id: string) => Promise<void>) => {
    const service = async (id: string): Promise<void> => {
        await repository.deleteOne(id);
    };

    return service;
};
