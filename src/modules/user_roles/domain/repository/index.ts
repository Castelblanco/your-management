import type { TUserRoleDOM } from '../entities';

export type TUserRoleRepository = {
    findAll: () => Promise<TUserRoleDOM[]>;
    findOne: (id: string) => Promise<TUserRoleDOM>;
    createOne: (role: TUserRoleDOM) => Promise<TUserRoleDOM>;
    updateOne: (role: TUserRoleDOM) => Promise<TUserRoleDOM>;
    deleteOne: (id: string) => Promise<void>;
    createMany: (roles: TUserRoleDOM[]) => Promise<number>;
};
