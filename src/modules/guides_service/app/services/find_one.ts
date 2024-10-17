import {
    type TGuideServiceRelations,
    type TGuideServiceDOM,
} from '@guides_service/domain/entities';
import { type TDependencies } from '.';

export const buildFindOne = ({ repository }: TDependencies) => {
    const service = async (
        id: string,
        relations: TGuideServiceRelations,
    ): Promise<TGuideServiceDOM> => {
        return await repository.findOne(id, relations);
    };

    return service;
};
