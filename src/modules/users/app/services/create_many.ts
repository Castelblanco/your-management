import type { TUserDOM } from '@users/domain/entities';
import { type Dependencies } from '.';

export const buildCreateMany = ({ repository, createId }: Dependencies) => {
    const service = async (users: TUserDOM[]): Promise<number> => {
        return await repository.createMany(
            users.map((user) => {
                user.id = createId();
                return user;
            }),
        );
    };

    return service;
};
