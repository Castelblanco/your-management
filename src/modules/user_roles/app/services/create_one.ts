import type { TUserRoleDOM } from '@user_roles/domain/entities';
import type { TUserRoleRepository } from '@user_roles/domain/repository';

type Dependencies = {
    repository: TUserRoleRepository;
    createId: () => string;
};

export const buildCreateOne = ({ repository, createId }: Dependencies) => {
    const services = async (role: TUserRoleDOM): Promise<TUserRoleDOM> => {
        role.id = createId();
        return await repository.createOne(role);
    };

    return services;
};
