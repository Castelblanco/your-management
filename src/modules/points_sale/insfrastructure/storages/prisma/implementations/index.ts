import type { TWrappers } from '@common/mappers_wrappers/wrappers';
import type {
    TPointSaleFilterDOM,
    TPointSaleDOM,
} from 'modules/points_sale/domain/entities';
import type { TPointSaleRepository } from 'modules/points_sale/domain/repository';
import type { TPointSaleDAL } from '../models';
import { PointsSaleWrappers } from '../wrappers';
import { StorageError } from '@common/response/errors/storage_error';
import { PrismaError, PrismaRequestError, prisma } from '@db/prisma/connect';
import { ErrorResourceNotFound } from '@common/response/errors/resource_not_found';

export class PointsSalePrismaRepository implements TPointSaleRepository {
    db: typeof prisma.point_Sales;
    wrappers: TWrappers<TPointSaleDOM, TPointSaleDAL>;

    constructor() {
        this.db = prisma.point_Sales;
        this.wrappers = new PointsSaleWrappers();
    }

    findAll = async (filter: TPointSaleFilterDOM): Promise<TPointSaleDOM[]> => {
        try {
            const pointsSale = await this.db.findMany({
                where: {
                    name: {
                        contains: filter.name,
                        mode: 'insensitive',
                    },
                    status_id: filter.statusId,
                },
                include: {
                    status: true,
                    users: (filter?.users as true) && {
                        include: {
                            role: true,
                        },
                    },
                },
                take: filter?.limit,
                skip: filter?.offset,
                orderBy: {
                    name: 'asc',
                },
            });

            return pointsSale.map(this.wrappers.dalToDom);
        } catch (e) {
            if (e instanceof PrismaRequestError)
                throw new StorageError(new PrismaError(e));

            throw new StorageError(e);
        }
    };

    findOne = async (id: string): Promise<TPointSaleDOM> => {
        try {
            const pointSale = await this.db.findFirst({
                include: {
                    status: true,
                    users: {
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

            return this.wrappers.dalToDom(pointSale);
        } catch (e) {
            if (e instanceof PrismaRequestError)
                throw new StorageError(new PrismaError(e));

            throw new StorageError(e);
        }
    };

    count = async (filter: TPointSaleFilterDOM): Promise<number> => {
        try {
            return await this.db.count({
                where: {
                    name: {
                        contains: filter.name,
                        mode: 'insensitive',
                    },
                    status_id: filter.statusId,
                },
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
                    users: undefined,
                },
                include: {
                    status: true,
                },
            });

            return this.wrappers.dalToDom(newPointSale);
        } catch (e) {
            if (e instanceof PrismaRequestError)
                throw new StorageError(new PrismaError(e));

            throw new StorageError(e);
        }
    };

    createMany = async (pointsSale: TPointSaleDOM[]): Promise<number> => {
        try {
            const { count } = await this.db.createMany({
                data: pointsSale.map(this.wrappers.domToDal),
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
                    status: undefined,
                    users: undefined,
                },
                where: {
                    id: pointSale.id,
                },
                include: {
                    status: true,
                },
            });

            return this.wrappers.dalToDom(updatePointSale);
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
