import { TPointSaleRepository } from '@point_sales/domain/repository';

type Dependencies = {
    repository: TPointSaleRepository;
};

export const buildFindOne = ({ repository }: Dependencies) => {
    const service = async (id: string, users?: boolean) => {
        return await repository.findOne(id, users);
    };

    return service;
};
