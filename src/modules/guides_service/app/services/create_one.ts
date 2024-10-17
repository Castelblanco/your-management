import { type TGuideServiceDOM } from '@guides_service/domain/entities';
import { type TDependencies } from '.';

export const buildCreateOne = ({ repository, createId }: TDependencies) => {
    const service = async (guide: TGuideServiceDOM): Promise<TGuideServiceDOM> => {
        guide.id = createId();
        return await repository.createOne(guide);
    };

    return service;
};
