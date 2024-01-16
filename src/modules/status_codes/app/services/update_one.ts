import type { TStatusCodeDOM } from '@status_codes/domain/entities';
import type { TStatusCodeRepository } from '@status_codes/domain/repository';

type Dependencies = {
    repository: TStatusCodeRepository;
};

export const buildUpdateOne = ({
    repository,
}: Dependencies): ((status: TStatusCodeDOM) => Promise<TStatusCodeDOM>) => {
    const services = async (status: TStatusCodeDOM): Promise<TStatusCodeDOM> => {
        return await repository.updateOne(status);
    };

    return services;
};
