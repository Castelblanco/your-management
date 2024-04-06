import type { TUserDOM } from '@users/domain/entities';
import { type Dependencies } from '.';

export const buildUpdateOne = ({ repository }: Dependencies) => {
    const service = async (user: TUserDOM): Promise<TUserDOM> => {
        return await repository.updateOne(user);
    };

    return service;
};
