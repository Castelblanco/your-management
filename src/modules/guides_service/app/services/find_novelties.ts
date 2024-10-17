import type { TGuideServiceNoveltyDOM } from '@guides_service/domain/entities';
import { type TDependencies } from '.';

export const buildFindNovelties = ({ repository }: TDependencies) => {
    const service = async (): Promise<TGuideServiceNoveltyDOM[]> => {
        return await repository.findNovelties();
    };

    return service;
};
