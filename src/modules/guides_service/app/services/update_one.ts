import { type TGuideServiceDOM } from '@guides_service/domain/entities';
import { type Dependencies } from '.';

export const buildUpdateOne = ({ repository }: Dependencies) => {
    const service = async (guide: TGuideServiceDOM): Promise<TGuideServiceDOM> => {
        return await repository.updateOne(guide);
    };

    return service;
};
