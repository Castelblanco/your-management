import { type TGuideServiceDOM } from '@guides_service/domain/entities';
import { type Dependencies } from '.';

export const buildCreateOne = ({ repository, createId }: Dependencies) => {
    const service = async (guide: TGuideServiceDOM): Promise<TGuideServiceDOM> => {
        guide.id = createId();
        return await repository.createOne(guide);
    };

    return service;
};
