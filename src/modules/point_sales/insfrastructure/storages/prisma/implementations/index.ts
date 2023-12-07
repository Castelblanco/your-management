import { TWrappers } from '@common/mappers_wrappers/wrappers';
import { StorageError } from '@common/response/errors/storage_error';
import { prisma } from '@db/prisma/connect';
import {
    TPointSaleFilterDOM,
    TPointSaleOPT,
    TPointSaleDOM,
} from '@point_sales/domain/entities';
import { TPointSaleRepository } from '@point_sales/domain/repository';
import { TPointSaleDAL } from '../models';
import { pointSalesWrappers } from '../wrappers';
import { ErrorResourceNotFound } from '@common/response/errors/resource_not_found';
import { prismaError } from 'prisma-better-errors';

export class PointSalesPrismaRepository implements TPointSaleRepository {
    db: typeof prisma.point_Sales;
    wrappers: TWrappers<TPointSaleDOM, TPointSaleDAL>;

    constructor() {
        this.db = prisma.point_Sales;
        this.wrappers = new pointSalesWrappers();
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
        } catch (e: any) {
            throw new StorageError(new prismaError(e));
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
        } catch (e: any) {
            throw new StorageError(new prismaError(e));
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
        } catch (e: any) {
            throw new StorageError(new prismaError(e));
        }
    };

    createMany = async (pointSales: TPointSaleDOM[]): Promise<number> => {
        try {
            const { count } = await this.db.createMany({
                data: pointSales.map(this.wrappers.domToDal),
            });

            return count;
        } catch (e: any) {
            throw new StorageError(new prismaError(e));
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
}
