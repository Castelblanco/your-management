import type { TStatusCodeDOM, TStatusCodeType } from '@status_codes/domain/entities';
import type { TStatusCodeRepository } from '@status_codes/domain/repository';

type Dependencies = {
    repository: TStatusCodeRepository;
    createId: () => string;
};

export const buildCreateMany = ({ repository, createId }: Dependencies) => {
    const services = async (
        type: TStatusCodeType,
        status: TStatusCodeDOM[],
    ): Promise<number> => {
        return await repository[type].createMany(
            status.map((s) => {
                s.id = createId();
                return s;
            }),
        );
    };

    return services;
};
