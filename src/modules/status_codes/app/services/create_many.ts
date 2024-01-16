import type { TStatusCodeDOM } from '@status_codes/domain/entities';
import type { TStatusCodeRepository } from '@status_codes/domain/repository';

type Dependencies = {
    repository: TStatusCodeRepository;
    createId: () => string;
};

export const buildCreateMany = ({
    repository,
    createId,
}: Dependencies): ((status: TStatusCodeDOM[]) => Promise<number>) => {
    const services = async (status: TStatusCodeDOM[]): Promise<number> => {
        return await repository.createMany(
            status.map((s) => {
                s.id = createId();
                return s;
            }),
        );
    };

    return services;
};
