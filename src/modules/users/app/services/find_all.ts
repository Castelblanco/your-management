import type { TUserDOM, TUserFilterDOM, TUserOPT } from '@users/domain/entities';
import type { TUsersRepository } from '@users/domain/repository';

type TDateFormatDay = 'dd/mm/yy' | 'dd/yy/mm';
type TDateFormatMonth = 'mm/dd/yy' | 'mm/yy/dd';
type TDateFormatYear = 'yy/mm/dd' | 'yy/dd/mm';

export type TDateFormat = TDateFormatDay | TDateFormatMonth | TDateFormatYear | 'iso';

type Dependencies = {
    repository: TUsersRepository;
    getDateFormat: (date: string | number, format?: TDateFormat) => string;
};

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
