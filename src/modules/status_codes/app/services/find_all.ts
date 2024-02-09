import type { TStatusCodeDOM, TStatusCodeType } from '@status_codes/domain/entities';
import { type TStatusCodeRepository } from '@status_codes/domain/repository';

type Dependencies = {
    repository: TStatusCodeRepository;
};

export const buildFindAll = ({ repository }: Dependencies) => {
    const services = async (type: TStatusCodeType): Promise<TStatusCodeDOM[]> => {
        return await repository[type].findAll();
    };

    return services;
};
