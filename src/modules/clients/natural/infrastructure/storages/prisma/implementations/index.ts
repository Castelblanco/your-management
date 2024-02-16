import {
    type TNaturalClientFilterDOM,
    type TNaturalClientOPT,
    type TNaturalClientDOM,
} from '@clients_natural/domain/entities';
import { type TNaturalClientRepository } from '@clients_natural/domain/repository';
import { type TWrappers } from '@common/mappers_wrappers/wrappers';
import { PrismaError, PrismaRequestError, prisma } from '@db/prisma';
import { type TNaturalClientFilterDAL, type TNaturalClientDAL } from '../models';
import { NaturalClientWrappers } from '../wrappers';
import { StorageError } from '@common/response/errors/storage_error';

export class NaturalClientPrismaRepository implements TNaturalClientRepository {
    db: typeof prisma.natural_Client;
    wrappers: TWrappers<TNaturalClientDOM, TNaturalClientDAL>;
    ifFilterDal: Record<
        keyof TNaturalClientFilterDOM,
        (v: string, o: TNaturalClientFilterDAL) => void
    >;

    constructor() {
        this.db = prisma.natural_Client;
        this.wrappers = new NaturalClientWrappers();

        this.ifFilterDal = {
            address: (v, o) => {
                o.address = {
                    contains: v,
                };
            },
            documentId: (v, o) => {
                o.document_id = {
                    contains: v,
                };
            },
            firstName: (v, o) => {
                o.first_name = {
                    contains: v,
                };
            },
            lastName: (v, o) => {
                o.last_name = {
                    contains: v,
                };
            },
            numberMovil: (v, o) => {
                o.number_movil = {
                    contains: v,
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
        filter: TNaturalClientFilterDOM,
        options: TNaturalClientOPT,
    ): Promise<TNaturalClientDOM[]> => {
        try {
            const clients = await this.db.findMany({
                where: { ...this.filterDomToDal(filter) },
                include: {
                    status: options.status,
                    type: true,
                },
                take: options.limit,
                skip: options.offset,
            });

            return clients.map(this.wrappers.dalToDom);
        } catch (e) {
            if (e instanceof PrismaRequestError)
                throw new StorageError(new PrismaError(e));

            throw new StorageError(e);
        }
    };

    findOne = async (
        id: string,
        status?: boolean | undefined,
    ): Promise<TNaturalClientDOM> => {
        try {
            const client = await this.db.findUniqueOrThrow({
                where: { id },
                include: {
                    type: true,
                    status,
                },
            });

            return this.wrappers.dalToDom(client);
        } catch (e) {
            if (e instanceof PrismaRequestError)
                throw new StorageError(new PrismaError(e));

            throw new StorageError(e);
        }
    };

    createOne = async (client: TNaturalClientDOM): Promise<TNaturalClientDOM> => {
        try {
            const newClient = await this.db.create({
                data: {
                    ...this.wrappers.domToDal(client),
                    status: undefined,
                    type: undefined,
                },
                include: {
                    type: true,
                    status: true,
                },
            });

            return this.wrappers.dalToDom(newClient);
        } catch (e) {
            if (e instanceof PrismaRequestError)
                throw new StorageError(new PrismaError(e));

            throw new StorageError(e);
        }
    };

    createMany = async (clients: TNaturalClientDOM[]): Promise<number> => {
        try {
            const { count } = await this.db.createMany({
                data: clients.map((client) => ({
                    ...this.wrappers.domToDal(client),
                    status: undefined,
                    type: undefined,
                })),
            });

            return count;
        } catch (e) {
            if (e instanceof PrismaRequestError)
                throw new StorageError(new PrismaError(e));

            throw new StorageError(e);
        }
    };

    updateOne = async (client: TNaturalClientDOM): Promise<TNaturalClientDOM> => {
        try {
            const newClient = await this.db.update({
                data: {
                    ...this.wrappers.domToDal(client),
                    status: undefined,
                    type: undefined,
                },
                where: {
                    id: client.id,
                },
                include: {
                    type: true,
                    status: true,
                },
            });

            return this.wrappers.dalToDom(newClient);
        } catch (e) {
            if (e instanceof PrismaRequestError)
                throw new StorageError(new PrismaError(e));

            throw new StorageError(e);
        }
    };

    deleteOne = async (id: string): Promise<void> => {
        try {
            await this.db.delete({
                where: { id },
            });
        } catch (e) {
            if (e instanceof PrismaRequestError)
                throw new StorageError(new PrismaError(e));

            throw new StorageError(e);
        }
    };

    filterDomToDal = (filter: TNaturalClientFilterDOM): TNaturalClientFilterDAL => {
        const options: TNaturalClientFilterDAL = {};

        Object.keys(filter).forEach((key) => {
            const value = filter[key as keyof TNaturalClientFilterDOM];
            if (!value) return;
            this.ifFilterDal[key as keyof TNaturalClientFilterDOM](value, options);
        });

        return options;
    };
}
