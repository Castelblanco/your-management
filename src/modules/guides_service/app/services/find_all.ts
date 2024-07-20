import {
    type TGuideServiceFilterDOM,
    type TGuideServiceRelations,
    type TGuideServiceDOM,
} from '@guides_service/domain/entities';
import { type Dependencies } from '.';

export const buildFindAll = ({ repository }: Dependencies) => {
    const service = async (
        filter: TGuideServiceFilterDOM,
        options: TGuideServiceRelations,
    ): Promise<TGuideServiceDOM[]> => {
        return await repository.findAll(filter, options);
    };

    return service;
};
