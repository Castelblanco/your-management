import type { TGuideServiceNoveltyDOM } from '@guides_service/domain/entities';
import { type Dependencies } from '.';

export const buildFindNovelties = ({ repository }: Dependencies) => {
    const service = async (): Promise<TGuideServiceNoveltyDOM[]> => {
        return await repository.findNovelties();
    };

    return service;
};
