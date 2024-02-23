import { type TGuideServiceDOM } from '@guides_service/domain/entities';
import { type Dependencies } from '.';

export const buildCreateMany = ({ repository, createId }: Dependencies) => {
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
