import type { TUserRoleRepository } from '@user_roles/domain/repository';

type Dependencies = {
    repository: TUserRoleRepository;
};

export const buildDeleteOne = ({
    repository,
}: Dependencies): ((id: string) => Promise<void>) => {
    const services = async (id: string): Promise<void> => {
        await repository.deleteOne(id);
    };

    return services;
};
