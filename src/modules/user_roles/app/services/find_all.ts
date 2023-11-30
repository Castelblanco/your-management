import { TUserRoleRepository } from '@user_roles/domain/repository';

type Dependencies = {
    repository: TUserRoleRepository;
};

export const buildFindAll = ({ repository }: Dependencies) => {
    const services = async () => {
        return await repository.findAll();
    };

    return services;
};
