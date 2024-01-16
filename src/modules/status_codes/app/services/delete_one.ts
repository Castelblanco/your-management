import type { TStatusCodeRepository } from '@status_codes/domain/repository';

type Dependencies = {
    repository: TStatusCodeRepository;
};

export const buildDeleteOne = ({
    repository,
}: Dependencies): ((id: string) => Promise<void>) => {
    const services = async (id: string): Promise<void> => {
        await repository.deleteOne(id);
    };

    return services;
};
