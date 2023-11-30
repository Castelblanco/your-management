import { TWrappers } from '@common/mappers_wrappers/wrappers';
import { StorageError } from '@common/response/errors/storage_error';
import { prisma } from '@db/prisma/connect';
import { TStatusCodeDOM } from '@status_codes/domain/entities';
import { TStatusCodeRepository } from '@status_codes/domain/repository';
import { TStatusCodeDAL } from '../models';
import { StatusCodeWrappers } from '../wrappers';
import { ErrorResourceNotFound } from '@common/response/errors/resource_not_found';
export class StatusCodePrismaRepository implements TStatusCodeRepository {
    db: typeof prisma.status_Code;
    wrappers: TWrappers<TStatusCodeDOM, TStatusCodeDAL>;

    constructor() {
        this.db = prisma.status_Code;
        this.wrappers = new StatusCodeWrappers();
    }

    findAll = async (): Promise<TStatusCodeDOM[]> => {
        try {
            const status = await this.db.findMany();
            return status.map(this.wrappers.dalToDom);
        } catch (e) {
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
                throw new ErrorResourceNotFound(
                    `this status with id ${id}, not exist`
                );

            return this.wrappers.dalToDom(status);
        } catch (e) {
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
            throw new StorageError(e);
        }
    };

    updateMany = async (status: TStatusCodeDOM[]): Promise<number> => {
        try {
            const { count } = await this.db.updateMany({
                data: status.map(this.wrappers.domToDal),
            });
            return count;
        } catch (e) {
            throw new StorageError(e);
        }
    };
}
