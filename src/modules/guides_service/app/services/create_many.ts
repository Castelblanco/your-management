import { type TGuideServiceDOM } from '@guides_service/domain/entities';
import { type TDependencies } from '.';

export const buildCreateMany = ({ repository, createId }: TDependencies) => {
    const service = async (guides: TGuideServiceDOM[]): Promise<number> => {
        return await repository.createMany(
            guides.map((guide) => {
                guide.id = createId();
                return guide;
            }),
        );
    };

    return service;
};
