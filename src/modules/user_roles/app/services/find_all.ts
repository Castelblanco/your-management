import type { TUserRoleDOM } from '@user_roles/domain/entities';
import type { TUserRoleRepository } from '@user_roles/domain/repository';

type Dependencies = {
    repository: TUserRoleRepository;
};

export const buildFindAll = ({ repository }: Dependencies) => {
    const services = async (): Promise<TUserRoleDOM[]> => {
        return await repository.findAll();
    };

    return services;
};
