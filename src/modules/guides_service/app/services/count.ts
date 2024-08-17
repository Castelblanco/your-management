import { type TGuideServiceFilterDOM } from '@guides_service/domain/entities';
import { type Dependencies } from '.';

export const buildCount = ({ repository }: Dependencies) => {
    const service = async (filter: TGuideServiceFilterDOM): Promise<number> => {
        return await repository.count(filter);
    };

    return service;
};
