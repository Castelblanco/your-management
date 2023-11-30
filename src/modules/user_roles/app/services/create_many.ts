import { TUserRoleDOM } from '@user_roles/domain/entities';
import { TUserRoleRepository } from '@user_roles/domain/repository';

type Dependencies = {
    repository: TUserRoleRepository;
    createId: () => string;
};

export const buildCreateMany = ({ repository, createId }: Dependencies) => {
    const services = async (roles: TUserRoleDOM[]) => {
        return await repository.createMany(
            roles.map((s) => {
                s.id = createId();
                return s;
            }),
        );
    };

    return services;
};
