import type { TUserDOM, TUserFilterDOM } from '../entities';

export type TUsersRepository = {
    findAll: (filter: TUserFilterDOM) => Promise<TUserDOM[]>;
    findOne: (filter: TUserFilterDOM) => Promise<TUserDOM>;
    findById: (
        id: string,
        pointSale?: boolean,
        role?: boolean,
        status?: boolean,
    ) => Promise<TUserDOM>;
    count: (filter: TUserFilterDOM) => Promise<number>;
    createOne: (user: TUserDOM) => Promise<TUserDOM>;
    updateOne: (user: TUserDOM) => Promise<TUserDOM>;
    deleteOne: (id: string) => Promise<void>;
    createMany: (users: TUserDOM[]) => Promise<number>;
};
