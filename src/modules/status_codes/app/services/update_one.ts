import { TStatusCodeDOM } from '@status_codes/domain/entities';
import { TStatusCodeRepository } from '@status_codes/domain/repository';

type Dependencies = {
    repository: TStatusCodeRepository;
};

export const buildUpdateOne = ({ repository }: Dependencies) => {
    const services = async (status: TStatusCodeDOM) => {
        return await repository.updateOne(status);
    };

    return services;
};
