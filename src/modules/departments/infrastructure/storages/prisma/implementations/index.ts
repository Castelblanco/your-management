import type { TWrappers } from '@common/mappers_wrappers/wrappers';
import { PrismaError, PrismaRequestError, prisma } from '@db/prisma/connect';
import type {
    TDepartmentFilterDOM,
    TDepartmentOPT,
    TDepartmentDOM,
} from 'modules/departments/domain/entities';
import type { TDepartmentRepository } from 'modules/departments/domain/repository';
import type { TDepartmentDAL, TDepartmentFilterDAL } from '../models';
import { DepartmentWrappers } from '../wrappers';
import { StorageError } from '@common/response/errors/storage_error';
import { ErrorResourceNotFound } from '@common/response/errors/resource_not_found';

export class DepartmentPrismaRepository implements TDepartmentRepository {
    db: typeof prisma.department;
    wrappers: TWrappers<TDepartmentDOM, TDepartmentDAL>;
    ifFilterDal: Record<
        keyof TDepartmentFilterDOM,
        (v: string, o: TDepartmentFilterDAL) => void
    >;

    constructor() {
        this.db = prisma.department;
        this.wrappers = new DepartmentWrappers();
        this.ifFilterDal = {
            name: (v, o) => {
                o.name = {
                    contains: v,
                    mode: 'insensitive',
                };
            },
            statusId: (v, o) => {
                o.status_id = {
                    equals: v,
                };
            },
        };
    }

    findAll = async (
        filter: TDepartmentFilterDOM,
        options: TDepartmentOPT,
    ): Promise<TDepartmentDOM[]> => {
        try {
            const departments = await this.db.findMany({
                where: this.filterDomToDal(filter),
                orderBy: {
                    name: 'asc',
                },
                include: {
                    status: true,
                },
                take: options.limit,
                skip: options.offset,
            });

            return departments.map(this.wrappers.dalToDom);
        } catch (e) {
            if (e instanceof PrismaRequestError)
                throw new StorageError(new PrismaError(e));

            throw new StorageError(e);
        }
    };

    findOne = async (id: string): Promise<TDepartmentDOM> => {
        try {
            const department = await this.db.findFirst({
                where: {
                    id,
                },
                include: {
                    status: true,
                },
            });

            if (!department)
                throw new ErrorResourceNotFound(
                    `this department with id ${id}, not exist`,
                );

            return this.wrappers.dalToDom(department);
        } catch (e) {
            if (e instanceof PrismaRequestError)
                throw new StorageError(new PrismaError(e));

            throw new StorageError(e);
        }
    };

    createOne = async (department: TDepartmentDOM): Promise<TDepartmentDOM> => {
        try {
            const newDepartment = await this.db.create({
                data: {
                    ...this.wrappers.domToDal(department),
                    status: undefined,
                },
                include: {
                    status: true,
                },
            });

            return this.wrappers.dalToDom(newDepartment);
        } catch (e) {
            if (e instanceof PrismaRequestError)
                throw new StorageError(new PrismaError(e));

            throw new StorageError(e);
        }
    };

    updateOne = async (department: TDepartmentDOM): Promise<TDepartmentDOM> => {
        try {
            const dal = this.wrappers.domToDal(department);
            const updateDepartment = await this.db.update({
                data: {
                    ...dal,
                    status: {
                        connect: {
                            id: department.status?.id,
                        },
                    },
                    status_id: undefined,
                },
                where: {
                    id: department.id,
                },
                include: {
                    status: true,
                },
            });

            return this.wrappers.dalToDom(updateDepartment);
        } catch (e) {
            if (e instanceof PrismaRequestError)
                throw new StorageError(new PrismaError(e));

            throw new StorageError(e);
        }
    };

    deleteOne = async (id: string): Promise<void> => {
        try {
            await this.db.delete({
                where: {
                    id,
                },
            });
        } catch (e) {
            if (e instanceof PrismaRequestError)
                throw new StorageError(new PrismaError(e));

            throw new StorageError(e);
        }
    };

    createMany = async (departments: TDepartmentDOM[]): Promise<number> => {
        try {
            const { count } = await this.db.createMany({
                data: departments.map(this.wrappers.domToDal),
            });

            return count;
        } catch (e) {
            if (e instanceof PrismaRequestError)
                throw new StorageError(new PrismaError(e));

            throw new StorageError(e);
        }
    };

    filterDomToDal = (filter: TDepartmentFilterDOM): TDepartmentFilterDAL => {
        const options: TDepartmentFilterDAL = {};

        Object.keys(filter).forEach((key) => {
            const value = filter[key as keyof TDepartmentFilterDOM];
            if (!value) return;

            this.ifFilterDal[key as keyof TDepartmentFilterDOM](value, options);
        });

        console.log(options);

        return options;
    };
}
