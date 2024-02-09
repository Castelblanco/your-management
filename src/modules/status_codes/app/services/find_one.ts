import type { TStatusCodeDOM, TStatusCodeType } from '@status_codes/domain/entities';
import type { TStatusCodeRepository } from '@status_codes/domain/repository';

type Dependencies = {
    repository: TStatusCodeRepository;
};

export const buildFindOne = ({
    repository,
}: Dependencies): ((type: TStatusCodeType, id: string) => Promise<TStatusCodeDOM>) => {
    const services = async (
        type: TStatusCodeType,
        id: string,
    ): Promise<TStatusCodeDOM> => {
        return await repository[type].findOne(id);
    };

    return services;
};
