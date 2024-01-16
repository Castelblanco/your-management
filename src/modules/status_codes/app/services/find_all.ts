import type { TStatusCodeDOM } from '@status_codes/domain/entities';
import { type TStatusCodeRepository } from '@status_codes/domain/repository';

type Dependencies = {
    repository: TStatusCodeRepository;
};

export const buildFindAll = ({
    repository,
}: Dependencies): (() => Promise<TStatusCodeDOM[]>) => {
    const services = async (): Promise<TStatusCodeDOM[]> => {
        return await repository.findAll();
    };

    return services;
};
