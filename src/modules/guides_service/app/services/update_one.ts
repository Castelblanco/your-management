import { type TGuideServiceDOM } from '@guides_service/domain/entities';
import { type TDependencies } from '.';

export const buildUpdateOne = ({ repository }: TDependencies) => {
    const service = async (guide: TGuideServiceDOM): Promise<TGuideServiceDOM> => {
        return await repository.updateOne(guide);
    };

    return service;
};
