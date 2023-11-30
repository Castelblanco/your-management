import { TStatusCodeDOM } from '@status_codes/domain/entities';
import { TStatusCodeRepository } from '@status_codes/domain/repository';

type Dependencies = {
    repository: TStatusCodeRepository;
};

export const buildDeleteOne = ({ repository }: Dependencies) => {
    const services = async (id: string) => {
        return await repository.deleteOne(id);
    };

    return services;
};
