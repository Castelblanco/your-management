import type { TWrappers } from '@common/mappers_wrappers/wrappers';
import type {
    TPointSaleFilterDOM,
    TPointSaleOPT,
    TPointSaleDOM,
} from '@point_sales/domain/entities';
import type { TPointSaleRepository } from '@point_sales/domain/repository';
import type { TPointSaleDAL } from '../models';
import { PointSalesWrappers } from '../wrappers';
import { StorageError } from '@common/response/errors/storage_error';
import { PrismaError, PrismaRequestError, prisma } from '@db/prisma/connect';
import { ErrorResourceNotFound } from '@common/response/errors/resource_not_found';

export class PointSalesPrismaRepository implements TPointSaleRepository {
    db: typeof prisma.point_Sales;
    wrappers: TWrappers<TPointSaleDOM, TPointSaleDAL>;

    constructor() {
        this.db = prisma.point_Sales;
        this.wrappers = new PointSalesWrappers();
    }

    findAll = async (
        filter: TPointSaleFilterDOM,
        options: TPointSaleOPT,
    ): Promise<TPointSaleDOM[]> => {
        try {
            const pointSales = await this.db.findMany({
                where: {
                    name: {
                        contains: filter.name,
                        mode: 'insensitive',
                    },
                    status_id: filter.statusId,
                    city_id: filter.cityId,
                },
                include: {
                    status: true,
                    city: true,
                    users: (options.users as true) && {
                        include: {
                            role: true,
                        },
                    },
                },
                take: options.limit,
                skip: options.offset,
                orderBy: {
                    name: 'asc',
                },
            });

            return pointSales.map((point) =>
                this.wrappers.dalToDom({
                    ...point,
                    status: point.status.name,
                    city: point.city.name,
                    users: point.users?.map((user) => ({
                        ...user,
                        role: user.role.name,
                    })),
                }),
            );
        } catch (e) {
            if (e instanceof PrismaRequestError)
                throw new StorageError(new PrismaError(e));

            throw new StorageError(e);
        }
    };

    findOne = async (id: string, users?: boolean): Promise<TPointSaleDOM> => {
        try {
            const pointSale = await this.db.findFirst({
                include: {
                    status: true,
                    city: true,
                    users: (users as true) && {
                        include: {
                            role: true,
                        },
                    },
                },
            });

            if (!pointSale)
                throw new ErrorResourceNotFound(
                    `this point sale with id ${id}, not exist`,
                );

            return this.wrappers.dalToDom({
                ...pointSale,
                status: pointSale.status.name,
                city: pointSale.city.name,
                users: pointSale.users?.map((user) => ({
                    ...user,
                    role: user.role.name,
                })),
            });
        } catch (e) {
            if (e instanceof PrismaRequestError)
                throw new StorageError(new PrismaError(e));

            throw new StorageError(e);
        }
    };

    createOne = async (pointSale: TPointSaleDOM): Promise<TPointSaleDOM> => {
        try {
            const newPointSale = await this.db.create({
                data: {
                    ...this.wrappers.domToDal(pointSale),
                    status: undefined,
                    city: undefined,
                    users: undefined,
                },
                include: {
                    status: true,
                    city: true,
                },
            });

            return this.wrappers.dalToDom({
                ...newPointSale,
                status: newPointSale.status.name,
                city: newPointSale.city.name,
            });
        } catch (e) {
            if (e instanceof PrismaRequestError)
                throw new StorageError(new PrismaError(e));

            throw new StorageError(e);
        }
    };

    createMany = async (pointSales: TPointSaleDOM[]): Promise<number> => {
        try {
            const { count } = await this.db.createMany({
                data: pointSales.map(this.wrappers.domToDal),
            });

            return count;
        } catch (e) {
            if (e instanceof PrismaRequestError)
                throw new StorageError(new PrismaError(e));

            throw new StorageError(e);
        }
    };

    updateOne = async (pointSale: TPointSaleDOM): Promise<TPointSaleDOM> => {
        try {
            const updatePointSale = await this.db.update({
                data: {
                    ...this.wrappers.domToDal(pointSale),
                    city: undefined,
                    status: undefined,
                    users: undefined,
                },
                where: {
                    id: pointSale.id,
                },
                include: {
                    status: true,
                    city: true,
                },
            });

            return this.wrappers.dalToDom({
                ...updatePointSale,
                status: updatePointSale.status.name,
                city: updatePointSale.city.name,
                users: undefined,
            });
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
}
