import type { TDepartamentDOM } from '@departaments/domain/entities';
import type { TDepartamentRepository } from '@departaments/domain/repository';

type Dependencies = {
    repository: TDepartamentRepository;
    createId: () => string;
};

export const buildCreateMany = ({ repository, createId }: Dependencies) => {
    const service = async (departaments: TDepartamentDOM[]): Promise<number> => {
        return await repository.createMany(
            departaments.map((d) => {
                d.id = createId();
                return d;
            }),
        );
    };

    return service;
};
