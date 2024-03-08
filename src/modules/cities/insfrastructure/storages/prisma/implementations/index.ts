import type { TCityFilterDOM, TCityOPT, TCityDOM } from '@cities/domain/entities';
import type { TCitiesRepository } from '@cities/domain/repository';
import type { TWrappers } from '@common/mappers_wrappers/wrappers';
import type { TCityDAL } from '../models';
import { CitiesWrappers } from '../wrappers';
import { StorageError } from '@common/response/errors/storage_error';
import { ErrorResourceNotFound } from '@common/response/errors/resource_not_found';
import { PrismaRequestError, PrismaError, prisma } from '@db/prisma';

export class CitiesPrismaRepository implements TCitiesRepository {
    db: typeof prisma.cities;
    wrappers: TWrappers<TCityDOM, TCityDAL>;

    constructor() {
        this.db = prisma.cities;
        this.wrappers = new CitiesWrappers();
    }

    findAll = async (filter: TCityFilterDOM, options: TCityOPT): Promise<TCityDOM[]> => {
        try {
            const cities = await this.db.findMany({
                where: {
                    name: {
                        contains: filter.name,
                        mode: 'insensitive',
                    },
                    status_id: filter.statusId,
                    department_id: filter.departmentId,
                },
                take: options.limit,
                skip: options.offset,
                include: {
                    department: true,
                    status: true,
                    point_sales: options.pointSales && {
                        select: {
                            id: true,
                            name: true,
                            address: true,
                            budget: true,
                            status: true,
                            users: true,
                        },
                    },
                },
                orderBy: {
                    name: 'asc',
                },
            });

            return cities.map((city) => ({
                ...this.wrappers.dalToDom({
                    ...city,
                }),
            }));
        } catch (e) {
            if (e instanceof PrismaRequestError)
                throw new StorageError(new PrismaError(e));

            throw new StorageError(e);
        }
    };

    findOne = async (id: string, pointSales?: boolean): Promise<TCityDOM> => {
        try {
            const city = await this.db.findFirst({
                where: {
                    id,
                },
                include: {
                    department: true,
                    status: true,
                    point_sales: (pointSales as true) && {
                        select: {
                            id: true,
                            name: true,
                            address: true,
                            budget: true,
                            status: true,
                            users: true,
                        },
                    },
                },
            });

            if (!city)
                throw new ErrorResourceNotFound(`this city with id: ${id}, not exist`);

            return this.wrappers.dalToDom({
                ...city,
            });
        } catch (e) {
            if (e instanceof PrismaRequestError)
                throw new StorageError(new PrismaError(e));

            throw new StorageError(e);
        }
    };

    createOne = async (city: TCityDOM): Promise<TCityDOM> => {
        try {
            const newCity = await this.db.create({
                data: {
                    ...this.wrappers.domToDal(city),
                    department: undefined,
                    status: undefined,
                    point_sales: undefined,
                },
                include: {
                    status: true,
                    department: true,
                },
            });

            return this.wrappers.dalToDom({
                ...newCity,
            });
        } catch (e) {
            if (e instanceof PrismaRequestError)
                throw new StorageError(new PrismaError(e));

            throw new StorageError(e);
        }
    };

    createMany = async (cities: TCityDOM[]): Promise<number> => {
        try {
            const { count } = await this.db.createMany({
                data: cities.map(this.wrappers.domToDal),
            });

            return count;
        } catch (e) {
            if (e instanceof PrismaRequestError)
                throw new StorageError(new PrismaError(e));

            throw new StorageError(e);
        }
    };

    updateOne = async (city: TCityDOM): Promise<TCityDOM> => {
        try {
            const updateCity = await this.db.update({
                where: {
                    id: city.id,
                },
                data: {
                    ...this.wrappers.domToDal(city),
                    department: undefined,
                    status: undefined,
                    point_sales: undefined,
                },
                include: {
                    status: true,
                    department: true,
                },
            });

            return this.wrappers.dalToDom(updateCity);
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
