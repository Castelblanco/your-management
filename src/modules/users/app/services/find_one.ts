import type { TUserDOM, TUserFilterDOM } from '@users/domain/entities';
import type { TUsersRepository } from '@users/domain/repository';

type Dependencies = {
    repository: TUsersRepository;
};

export const buildFindOne = ({
    repository,
}: Dependencies): ((
    filter: TUserFilterDOM,
    pointSale?: boolean,
    role?: boolean,
) => Promise<TUserDOM>) => {
    const service = async (
        filter: TUserFilterDOM,
        pointSale?: boolean,
        role?: boolean,
    ): Promise<TUserDOM> => {
        return await repository.findOne(filter, pointSale, role);
    };

    return service;
};
