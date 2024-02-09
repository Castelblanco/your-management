import type { TStatusCodeDOM, TStatusCodeType } from '@status_codes/domain/entities';
import type { TStatusCodeRepository } from '@status_codes/domain/repository';

type Dependencies = {
    repository: TStatusCodeRepository;
    createId: () => string;
};

export const buildCreateOne = ({ repository, createId }: Dependencies) => {
    const services = async (
        type: TStatusCodeType,
        status: TStatusCodeDOM,
    ): Promise<TStatusCodeDOM> => {
        status.id = createId();
        return await repository[type].createOne(status);
    };

    return services;
};
