import {
    type TGuideServiceFilterDOM,
    type TGuideServiceRelations,
    type TGuideServiceDOM,
} from '@guides_service/domain/entities';
import { type TDependencies } from '.';

export const buildFindAll = ({ repository }: TDependencies) => {
    const service = async (
        filter: TGuideServiceFilterDOM,
        options: TGuideServiceRelations,
    ): Promise<TGuideServiceDOM[]> => {
        return await repository.findAll(filter, options);
    };

    return service;
};
