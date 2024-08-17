import type {
    TLegalClientFilterDOM,
    TLegalClientDOM,
} from '@clients_legal/domain/entities';
import type { TLegalClientRepository } from '@clients_legal/domain/repository';
import type { TWrappers } from '@common/mappers_wrappers/wrappers';
import { StorageError } from '@common/response/errors/storage_error';
import { PrismaError, PrismaRequestError, prisma } from '@db/prisma';
import type { TLegalClientDAL, TLegalClientFilterDAL } from '../models';
import { LegalClientWrappers } from '../wrappers';
import { ErrorResourceNotFound } from '@common/response/errors/resource_not_found';

export class LegalClientPrismaRepository implements TLegalClientRepository {
    db: typeof prisma.legal_Client;
    wrappers: TWrappers<TLegalClientDOM, TLegalClientDAL>;
    ifFilterDal: Record<
        keyof TLegalClientFilterDOM,
        (v: any, o: TLegalClientFilterDAL) => void
    >;

    constructor() {
        this.db = prisma.legal_Client;
        this.wrappers = new LegalClientWrappers();
        this.ifFilterDal = {
            numberMovil: (v, o) => {
                o.number_movil = {
                    contains: v,
                    mode: 'insensitive',
                };
            },
            address: (v, o) => {
                o.address = {
                    contains: v,
                    mode: 'insensitive',
                };
            },
            nit: (v, o) => {
                o.nit = {
                    contains: v,
                    mode: 'insensitive',
                };
            },
            businessName: (v, o) => {
                o.business_name = {
                    contains: v,
                    mode: 'insensitive',
                };
            },
            statusId: (v, o) => {
                o.status_id = {
                    equals: v,
                };
            },
            limit: () => {},
            offset: () => {},
            status: () => {},
        };
    }

    findAll = async (filter: TLegalClientFilterDOM): Promise<TLegalClientDOM[]> => {
        try {
            const clients = await this.db.findMany({
                where: this.filterDomToDal(filter),
                include: {
                    status: filter?.status,
                },
                take: filter?.limit,
                skip: filter?.offset,
            });

            return clients.map(this.wrappers.dalToDom);
        } catch (e) {
            if (e instanceof PrismaRequestError)
                throw new StorageError(new PrismaError(e));

            throw new StorageError(e);
        }
    };

    findOne = async (id: string): Promise<TLegalClientDOM> => {
        try {
            const client = await this.db.findUnique({
                where: {
                    id,
                },
                include: {
                    status: true,
                },
            });

            if (!client)
                throw new ErrorResourceNotFound(`this client with id ${id}, not exist`);

            return this.wrappers.dalToDom(client);
        } catch (e) {
            if (e instanceof PrismaRequestError)
                throw new StorageError(new PrismaError(e));

            throw new StorageError(e);
        }
    };

    count = async (filter: TLegalClientFilterDOM): Promise<number> => {
        try {
            return await this.db.count({
                where: this.filterDomToDal(filter),
            });
        } catch (e) {
            if (e instanceof PrismaRequestError)
                throw new StorageError(new PrismaError(e));

            throw new StorageError(e);
        }
    };

    createOne = async (client: TLegalClientDOM): Promise<TLegalClientDOM> => {
        try {
            const newClient = await this.db.create({
                data: {
                    ...this.wrappers.domToDal(client),
                    status: undefined,
                },
                include: {
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

    createMany = async (clients: TLegalClientDOM[]): Promise<number> => {
        try {
            const { count } = await this.db.createMany({
                data: clients.map((client) => ({
                    ...this.wrappers.domToDal(client),
                    status: undefined,
                })),
            });

            return count;
        } catch (e) {
            if (e instanceof PrismaRequestError)
                throw new StorageError(new PrismaError(e));

            throw new StorageError(e);
        }
    };

    updateOne = async (client: TLegalClientDOM): Promise<TLegalClientDOM> => {
        try {
            const updateClient = await this.db.update({
                data: {
                    ...this.wrappers.domToDal(client),
                    status: undefined,
                },
                where: {
                    id: client.id,
                },
                include: {
                    status: true,
                },
            });

            return this.wrappers.dalToDom(updateClient);
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

    filterDomToDal = (filter: TLegalClientFilterDOM): TLegalClientFilterDAL => {
        const options: TLegalClientFilterDAL = {};

        Object.keys(filter).forEach((key) => {
            const value = filter[key as keyof TLegalClientFilterDOM];
            if (!value) return;

            this.ifFilterDal[key as keyof TLegalClientFilterDOM](value, options);
        });
        return options;
    };
}
