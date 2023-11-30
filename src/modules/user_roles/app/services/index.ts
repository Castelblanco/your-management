import { buildFindAll } from './find_all';
import { buildCreateOne } from './create_one';
import { buildFindOne } from './find_one';
import { buildUpdateOne } from './update_one';
import { buildDeleteOne } from './delete_one';
import { buildCreateMany } from './create_many';
import { TUserRoleRepository } from '@user_roles/domain/repository';
import { TUserRoleDOM } from '@user_roles/domain/entities';

export class UserRolesServices {
    findAll: () => Promise<TUserRoleDOM[]>;
    findOne: (id: string) => Promise<TUserRoleDOM>;
    createOne: (role: TUserRoleDOM) => Promise<TUserRoleDOM>;
    updateOne: (role: TUserRoleDOM) => Promise<TUserRoleDOM>;
    deleteOne: (id: string) => Promise<void>;
    createMany: (roles: TUserRoleDOM[]) => Promise<number>;

    constructor(repository: TUserRoleRepository, createId: () => string) {
        this.findAll = buildFindAll({ repository });
        this.findOne = buildFindOne({ repository });
        this.createOne = buildCreateOne({ repository, createId });
        this.updateOne = buildUpdateOne({ repository });
        this.deleteOne = buildDeleteOne({ repository });
        this.createMany = buildCreateMany({ createId, repository });
    }
}
