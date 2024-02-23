import {
    type TGuideServiceRepations,
    type TGuideServiceDOM,
} from '@guides_service/domain/entities';
import { type Dependencies } from '.';

export const buildFindOne = ({ repository }: Dependencies) => {
    const service = async (
        id: string,
        relations: TGuideServiceRepations,
    ): Promise<TGuideServiceDOM> => {
        return await repository.findOne(id, relations);
    };

    return service;
};
