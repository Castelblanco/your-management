import { TWrappers } from '@common/mappers_wrappers/wrappers';
import { TUserRoleDOM } from '@user_roles/domain/entities';
import { TUserRoleRepository } from '@user_roles/domain/repository';
import { TUserRoleDAL } from '../models';
import { prisma } from '@db/prisma/connect';
import { UserRolesWrappers } from '../wrappers';
import { StorageError } from '@common/response/errors/storage_error';
import { ErrorResourceNotFound } from '@common/response/errors/resource_not_found';
import { prismaError } from 'prisma-better-errors';

export class UserRolesPrismaRepository implements TUserRoleRepository {
    db: typeof prisma.users_Roles;
    wrappers: TWrappers<TUserRoleDOM, TUserRoleDAL>;

    constructor() {
        this.db = prisma.users_Roles;
        this.wrappers = new UserRolesWrappers();
    }

    findAll = async (): Promise<TUserRoleDOM[]> => {
        try {
            const roles = await this.db.findMany();
            return roles.map(this.wrappers.dalToDom);
        } catch (e: any) {
            throw new StorageError(new prismaError(e));
        }
    };

    findOne = async (id: string): Promise<TUserRoleDOM> => {
        try {
            const role = await this.db.findFirst({
                where: {
                    id,
                },
            });

            if (!role)
                throw new ErrorResourceNotFound(
                    `this role with id ${id}, not exist`,
                );

            return this.wrappers.dalToDom(role);
        } catch (e: any) {
            throw new StorageError(new prismaError(e));
        }
    };

    createOne = async (role: TUserRoleDOM): Promise<TUserRoleDOM> => {
        try {
            const newRole = await this.db.create({
                data: this.wrappers.domToDal(role),
            });
            return this.wrappers.dalToDom(newRole);
        } catch (e: any) {
            throw new StorageError(new prismaError(e));
        }
    };

    updateOne = async (role: TUserRoleDOM): Promise<TUserRoleDOM> => {
        try {
            const updateRole = await this.db.update({
                data: this.wrappers.domToDal(role),
                where: {
                    id: role.id,
                },
            });
            return this.wrappers.dalToDom(updateRole);
        } catch (e: any) {
            throw new StorageError(new prismaError(e));
        }
    };

    deleteOne = async (id: string): Promise<void> => {
        try {
            await this.db.delete({
                where: {
                    id,
                },
            });
        } catch (e: any) {
            throw new StorageError(new prismaError(e));
        }
    };

    createMany = async (roles: TUserRoleDOM[]): Promise<number> => {
        try {
            const { count } = await this.db.createMany({
                data: roles.map(this.wrappers.domToDal),
            });
            return count;
        } catch (e: any) {
            throw new StorageError(new prismaError(e));
        }
    };
}
