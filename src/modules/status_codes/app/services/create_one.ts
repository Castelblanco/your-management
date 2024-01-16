import type { TStatusCodeDOM } from '@status_codes/domain/entities';
import type { TStatusCodeRepository } from '@status_codes/domain/repository';

type Dependencies = {
    repository: TStatusCodeRepository;
    createId: () => string;
};

export const buildCreateOne = ({
    repository,
    createId,
}: Dependencies): ((status: TStatusCodeDOM) => Promise<TStatusCodeDOM>) => {
    const services = async (status: TStatusCodeDOM): Promise<TStatusCodeDOM> => {
        status.id = createId();
        return await repository.createOne(status);
    };

    return services;
};
