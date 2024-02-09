import type { TStatusCodeDOM, TStatusCodeType } from '@status_codes/domain/entities';
import type { TStatusCodeRepository } from '@status_codes/domain/repository';

type Dependencies = {
    repository: TStatusCodeRepository;
};

export const buildUpdateOne = ({ repository }: Dependencies) => {
    const services = async (
        type: TStatusCodeType,
        status: TStatusCodeDOM,
    ): Promise<TStatusCodeDOM> => {
        return await repository[type].updateOne(status);
    };

    return services;
};
