import { type TStatusCodeRepository } from '@status_codes/domain/repository';

type Dependencies = {
    repository: TStatusCodeRepository;
};

export const buildFindAll = ({ repository }: Dependencies) => {
    const services = async () => {
        return await repository.findAll();
    };

    return services;
};
