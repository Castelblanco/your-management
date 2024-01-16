import type { TStatusCodeDOM } from '@status_codes/domain/entities';
import type { TStatusCodeRepository } from '@status_codes/domain/repository';

type Dependencies = {
    repository: TStatusCodeRepository;
};

export const buildFindOne = ({
    repository,
}: Dependencies): ((id: string) => Promise<TStatusCodeDOM>) => {
    const services = async (id: string): Promise<TStatusCodeDOM> => {
        return await repository.findOne(id);
    };

    return services;
};
