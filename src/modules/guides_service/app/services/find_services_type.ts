import type { TGuideServiceTypeServiceDOM } from '@guides_service/domain/entities';
import { type TDependencies } from '.';

export const buildFindServicesType = ({ repository }: TDependencies) => {
    const service = async (): Promise<TGuideServiceTypeServiceDOM[]> => {
        return await repository.findServicesType();
    };

    return service;
};
