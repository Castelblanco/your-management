import {
    type TGuideServiceFilterDOM,
    type TGuideServiceDOM,
    type TGuideServiceOPT,
} from '@guides_service/domain/entities';
import { type Dependencies } from '.';

export const buildFindAll = ({ repository }: Dependencies) => {
    const service = async (
        filter: TGuideServiceFilterDOM,
        options: TGuideServiceOPT,
    ): Promise<TGuideServiceDOM[]> => {
        return await repository.findAll(filter, options);
    };

    return service;
};
