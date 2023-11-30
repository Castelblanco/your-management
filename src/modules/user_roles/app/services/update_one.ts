import { TUserRoleDOM } from '@user_roles/domain/entities';
import { TUserRoleRepository } from '@user_roles/domain/repository';

type Dependencies = {
    repository: TUserRoleRepository;
};

export const buildUpdateOne = ({ repository }: Dependencies) => {
    const services = async (role: TUserRoleDOM) => {
        return await repository.updateOne(role);
    };

    return services;
};
