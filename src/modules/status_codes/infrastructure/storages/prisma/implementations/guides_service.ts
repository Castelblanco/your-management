import type { TWrappers } from '@common/mappers_wrappers/wrappers';
import type { TStatusCodeDOM } from '@status_codes/domain/entities';
import type { TStatusCodeOperations } from '@status_codes/domain/repository';
import type { TStatusCodeDAL } from '../models';

import { StatusCodeWrappers } from '../wrappers';
import { ErrorResourceNotFound } from '@common/response/errors/resource_not_found';
import { StorageError } from '@common/response/errors/storage_error';
import { PrismaError, PrismaRequestError, prisma } from '@db/prisma/connect';
export class StatusCodeGuidesServicePrismaOperations implements TStatusCodeOperations {
    db: typeof prisma.guide_Service_Status;
    wrappers: TWrappers<TStatusCodeDOM, TStatusCodeDAL>;

    constructor() {
        this.db = prisma.guide_Service_Status;
        this.wrappers = new StatusCodeWrappers();
    }

    findAll = async (): Promise<TStatusCodeDOM[]> => {
        try {
            const status = await this.db.findMany();
            return status.map(this.wrappers.dalToDom);
        } catch (e) {
            console.log(e);
            if (e instanceof PrismaRequestError)
                throw new StorageError(new PrismaError(e));

            throw new StorageError(e);
        }
    };

    findOne = async (id: string): Promise<TStatusCodeDOM> => {
        try {
            const status = await this.db.findFirst({
                where: {
                    id,
                },
            });

            if (!status)
                throw new ErrorResourceNotFound(`this status with id ${id}, not exist`);

            return this.wrappers.dalToDom(status);
        } catch (e) {
            if (e instanceof PrismaRequestError)
                throw new StorageError(new PrismaError(e));

            throw new StorageError(e);
        }
    };

    createOne = async (status: TStatusCodeDOM): Promise<TStatusCodeDOM> => {
        try {
            const newStatus = await this.db.create({
                data: this.wrappers.domToDal(status),
            });
            return this.wrappers.dalToDom(newStatus);
        } catch (e) {
            if (e instanceof PrismaRequestError)
                throw new StorageError(new PrismaError(e));

            throw new StorageError(e);
        }
    };

    updateOne = async (status: TStatusCodeDOM): Promise<TStatusCodeDOM> => {
        try {
            const updateStatus = await this.db.update({
                data: this.wrappers.domToDal(status),
                where: {
                    id: status.id,
                },
            });
            return this.wrappers.dalToDom(updateStatus);
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

    createMany = async (status: TStatusCodeDOM[]): Promise<number> => {
        try {
            const { count } = await this.db.createMany({
                data: status.map(this.wrappers.domToDal),
            });
            return count;
        } catch (e) {
            if (e instanceof PrismaRequestError)
                throw new StorageError(new PrismaError(e));

            throw new StorageError(e);
        }
    };
}
