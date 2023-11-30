import { TStatusCodeRepository } from '@status_codes/domain/repository';

type Dependencies = {
    repository: TStatusCodeRepository;
};

export const buildFindOne = ({ repository }: Dependencies) => {
    const services = async (id: string) => {
        return await repository.findOne(id);
    };

    return services;
};
