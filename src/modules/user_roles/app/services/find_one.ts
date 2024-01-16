import type { TUserRoleRepository } from '@user_roles/domain/repository';
import type { TUserRoleDOM } from '@user_roles/domain/entities';

type Dependencies = {
    repository: TUserRoleRepository;
};

export const buildFindOne = ({
    repository,
}: Dependencies): ((id: string) => Promise<TUserRoleDOM>) => {
    const services = async (id: string): Promise<TUserRoleDOM> => {
        return await repository.findOne(id);
    };

    return services;
};
