import type { TStatusCodeType } from '@status_codes/domain/entities';
import type { TStatusCodeRepository } from '@status_codes/domain/repository';

type Dependencies = {
    repository: TStatusCodeRepository;
};

export const buildDeleteOne = ({
    repository,
}: Dependencies): ((type: TStatusCodeType, id: string) => Promise<void>) => {
    const services = async (type: TStatusCodeType, id: string): Promise<void> => {
        await repository[type].deleteOne(id);
    };

    return services;
};
