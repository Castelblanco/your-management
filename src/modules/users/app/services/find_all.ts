import type { TUserDOM, TUserFilterDOM, TUserOPT } from '@users/domain/entities';
import { type Dependencies } from '.';

export const buildFindAll = ({ repository, getDateFormat }: Dependencies) => {
    const service = async (
        filter: TUserFilterDOM,
        options: TUserOPT,
    ): Promise<TUserDOM[]> => {
        if (filter.startTime) {
            filter.startTime = getDateFormat(+filter.startTime, 'iso');
        }
        if (filter.endTime) filter.endTime = getDateFormat(+filter.endTime, 'iso');

        return await repository.findAll(filter, options);
    };

    return service;
};
