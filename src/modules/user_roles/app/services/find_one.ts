import { TUserRoleRepository } from '@user_roles/domain/repository';

type Dependencies = {
    repository: TUserRoleRepository;
};

export const buildFindOne = ({ repository }: Dependencies) => {
    const services = async (id: string) => {
        return await repository.findOne(id);
    };

    return services;
};
