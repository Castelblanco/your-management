import type {
    TLegalClientFilterDOM,
    TLegalClientOPT,
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
        (v: string, o: TLegalClientFilterDAL) => void
    >;

    constructor() {
        this.db = prisma.legal_Client;
        this.wrappers = new LegalClientWrappers();
        this.ifFilterDal = {
            id: (v, o) => (o.id = v),
            numberMovil: (v, o) => (o.number_movil = v),
            address: (v, o) => (o.address = v),
            nit: (v, o) => (o.nit = v),
            businessName: (v, o) => (o.business_name = v),
            typeId: (v, o) => (o.type_id = v),
            statusId: (v, o) => (o.status_id = v),
        };
    }

    findAll = async (
        filter: TLegalClientFilterDOM,
        option: TLegalClientOPT,
    ): Promise<TLegalClientDOM[]> => {
        try {
            const clients = await this.db.findMany({
                where: { ...this.filterDomToDal(filter) },
                include: {
                    type: true,
                    status: option.status,
                },
                take: option.limit,
                skip: option.offset,
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
    ): Promise<TLegalClientDOM> => {
        try {
            const client = await this.db.findUnique({
                where: {
                    id,
                },
                include: {
                    type: true,
                    status,
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

    createOne = async (client: TLegalClientDOM): Promise<TLegalClientDOM> => {
        try {
            const newClient = await this.db.create({
                data: {
                    ...this.wrappers.domToDal(client),
                    type: undefined,
                    status: undefined,
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

    createMany = async (clients: TLegalClientDOM[]): Promise<number> => {
        try {
            const { count } = await this.db.createMany({
                data: clients.map((client) => ({
                    ...this.wrappers.domToDal(client),
                    type: undefined,
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
                    type: undefined,
                    status: undefined,
                },
                where: {
                    id: client.id,
                },
                include: {
                    type: true,
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
