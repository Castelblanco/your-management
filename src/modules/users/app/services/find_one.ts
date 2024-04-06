import type { TUserDOM } from '@users/domain/entities';
import { type Dependencies } from '.';

export const buildFindOne = ({ repository }: Dependencies) => {
    const service = async (
        id: string,
        pointSale?: boolean,
        role?: boolean,
        status?: boolean,
    ): Promise<TUserDOM> => {
        return await repository.findOne(id, pointSale, role, status);
    };

    return service;
};
