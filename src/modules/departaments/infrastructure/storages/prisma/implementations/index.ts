import { TWrappers } from '@common/mappers_wrappers/wrappers';
import { prisma } from '@db/prisma/connect';
import {
    TDepartamentFilterDOM,
    TDepartamentOPT,
    TDepartamentDOM,
} from '@departaments/domain/entities';
import { TDepartamentRepository } from '@departaments/domain/repository';
import { TDepartamentDAL } from '../models';
import { DepartamentWrappers } from '../wrappers';
import { StorageError } from '@common/response/errors/storage_error';
import { ErrorResourceNotFound } from '@common/response/errors/resource_not_found';
import { prismaError } from 'prisma-better-errors';

export class DepartamentPrismaRepository implements TDepartamentRepository {
    db: typeof prisma.department;
    wrappers: TWrappers<TDepartamentDOM, TDepartamentDAL>;

    constructor() {
        this.db = prisma.department;
        this.wrappers = new DepartamentWrappers();
    }

    findAll = async (
        filter: TDepartamentFilterDOM,
        options: TDepartamentOPT,
    ): Promise<TDepartamentDOM[]> => {
        try {
            const departaments = await this.db.findMany({
                where: {
                    name: {
                        contains: filter?.name,
                    },
                    status_id: {
                        equals: filter?.statusId,
                    },
                },
                orderBy: {
                    name: 'asc',
                },
                include: {
                    status: true,
                },
                take: options.limit,
                skip: options.offset,
            });

            return departaments.map(this.wrappers.dalToDom);
        } catch (e: any) {
            throw new StorageError(new prismaError(e));
        }
    };

    findOne = async (id: string): Promise<TDepartamentDOM> => {
        try {
            const departament = await this.db.findFirst({
                where: {
                    id,
                },
                include: {
                    status: true,
                },
            });

            if (!departament)
                throw new ErrorResourceNotFound(
                    `this departament with id ${id}, not exist`,
                );

            return this.wrappers.dalToDom(departament);
        } catch (e: any) {
            throw new StorageError(new prismaError(e));
        }
    };

    createOne = async (
        departament: TDepartamentDOM,
    ): Promise<TDepartamentDOM> => {
        try {
            const newDepartament = await this.db.create({
                data: {
                    ...this.wrappers.domToDal(departament),
                    status: undefined,
                },
                include: {
                    status: true,
                },
            });

            return this.wrappers.dalToDom(newDepartament);
        } catch (e: any) {
            throw new StorageError(new prismaError(e));
        }
    };

    updateOne = async (
        departament: TDepartamentDOM,
    ): Promise<TDepartamentDOM> => {
        try {
            const dal = this.wrappers.domToDal(departament);
            const updateDepartament = await this.db.update({
                data: {
                    ...dal,
                    status: {
                        connect: {
                            id: departament.statusId,
                        },
                    },
                    status_id: undefined,
                },
                where: {
                    id: departament.id,
                },
                include: {
                    status: true,
                },
            });

            return this.wrappers.dalToDom(updateDepartament);
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

    createMany = async (departaments: TDepartamentDOM[]): Promise<number> => {
        try {
            const { count } = await this.db.createMany({
                data: departaments.map(this.wrappers.domToDal),
            });

            return count;
        } catch (e: any) {
            throw new StorageError(new prismaError(e));
        }
    };
}
