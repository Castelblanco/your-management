import { TStatusCodeDOM } from '@status_codes/domain/entities';
import { TStatusCodeRepository } from '@status_codes/domain/repository';

type Dependencies = {
    repository: TStatusCodeRepository;
    createId: () => string;
};

export const buildCreateMany = ({ repository, createId }: Dependencies) => {
    const services = async (status: TStatusCodeDOM[]) => {
        return await repository.createMany(
            status.map((s) => {
                s.id = createId();
                return s;
            }),
        );
    };

    return services;
};
