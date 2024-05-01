import type { TGuideServiceTypeServiceDOM } from '@guides_service/domain/entities';
import { type Dependencies } from '.';

export const buildFindServicesType = ({ repository }: Dependencies) => {
    const service = async (): Promise<TGuideServiceTypeServiceDOM[]> => {
        return await repository.findServicesType();
    };

    return service;
};
