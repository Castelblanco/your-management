import { type TGuideServiceFilterDOM } from '@guides_service/domain/entities';
import { type TDependencies } from '.';

export const buildCount = ({ repository }: TDependencies) => {
    const service = async (filter: TGuideServiceFilterDOM): Promise<number> => {
        return await repository.count(filter);
    };

    return service;
};
