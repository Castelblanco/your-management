import { TDepartamentDOM } from '@departaments/domain/entities';
import { TDepartamentRepository } from '@departaments/domain/repository';

type Dependencies = {
    repository: TDepartamentRepository;
    createId: () => string;
};

export const buildCreateMany = ({ repository, createId }: Dependencies) => {
    const service = async (departaments: TDepartamentDOM[]) => {
        return await repository.createMany(
            departaments.map((d) => {
                d.id = createId();
                return d;
            }),
        );
    };

    return service;
};
