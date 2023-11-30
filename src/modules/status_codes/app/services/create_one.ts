import { TStatusCodeDOM } from '@status_codes/domain/entities';
import { TStatusCodeRepository } from '@status_codes/domain/repository';

type Dependencies = {
    repository: TStatusCodeRepository;
    createId: () => string;
};

export const buildCreateOne = ({ repository, createId }: Dependencies) => {
    const services = async (status: TStatusCodeDOM) => {
        if (!status.id) status.id = createId();
        return await repository.createOne(status);
    };

    return services;
};
