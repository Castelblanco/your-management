import { type TWrappers } from '@common/mappers_wrappers/wrappers';
import { PrismaError, PrismaRequestError, prisma } from '@db/prisma';
import type {
    TGuideServiceFilterDOM,
    TGuideServiceDOM,
    TGuideServiceRelations,
    TGuideServiceOPT,
    TGuideServiceNoveltyDOM,
    TGuideServiceTypeServiceDOM,
} from '@guides_service/domain/entities';
import { type TGuideServiceRepository } from '@guides_service/domain/repository';
import { type TGuideServiceFilterDAL, type TGuideServiceDAL } from '../models';
import { GuideServiceWrappers } from '../wrappers';
import { StorageError } from '@common/response/errors/storage_error';

export class GuideServicePrismaRepository implements TGuideServiceRepository {
    db: typeof prisma.guide_Service;
    wrappers: TWrappers<TGuideServiceDOM, TGuideServiceDAL>;
    ifFilterDal: Record<
        keyof TGuideServiceFilterDOM,
        (v: string, o: TGuideServiceFilterDAL) => void
    >;

    constructor() {
        this.db = prisma.guide_Service;
        this.wrappers = new GuideServiceWrappers();

        this.ifFilterDal = {
            userId: (v, o) => {
                o.user_id = { equals: v };
            },
        };
    }

    findAll = async (
        filter: TGuideServiceFilterDOM,
        options: TGuideServiceOPT,
    ): Promise<TGuideServiceDOM[]> => {
        try {
            const guides = await this.db.findMany({
                where: this.filterDomToDal(filter),
                include: {
                    client_legal_destination: (options.clientDestination as true) && {
                        include: {
                            status: true,
                        },
                    },
                    client_legal_origin: (options.clientOrigin as true) && {
                        include: {
                            status: true,
                        },
                    },
                    client_natural_destination: (options.clientDestination as true) && {
                        include: {
                            status: true,
                        },
                    },
                    client_natural_origin: (options.clientOrigin as true) && {
                        include: {
                            status: true,
                        },
                    },
                    novelty: options.novelty,
                    point_sale_destination: options.pointSaleDestination,
                    point_sale_origin: options.pointSaleOrigin,
                    service: options.service,
                    status: options.status,
                    user: (options.user as true) && {
                        include: {
                            role: true,
                            status: true,
                        },
                    },
                },
            });
            return guides.map(this.wrappers.dalToDom);
        } catch (e) {
            if (e instanceof PrismaRequestError)
                throw new StorageError(new PrismaError(e));

            throw new StorageError(e);
        }
    };

    findOne = async (
        id: string,
        relations: TGuideServiceRelations,
    ): Promise<TGuideServiceDOM> => {
        try {
            console.log({ relations });
            const guide = await this.db.findFirstOrThrow({
                where: {
                    id,
                },
                include: {
                    client_legal_destination: (relations.clientDestination as true) && {
                        include: {
                            status: true,
                        },
                    },
                    client_legal_origin: (relations.clientOrigin as true) && {
                        include: {
                            status: true,
                        },
                    },
                    client_natural_destination: (relations.clientDestination as true) && {
                        include: {
                            status: true,
                        },
                    },
                    client_natural_origin: (relations.clientOrigin as true) && {
                        include: {
                            status: true,
                        },
                    },
                    novelty: relations.novelty,
                    point_sale_destination: relations.pointSaleDestination,
                    point_sale_origin: relations.pointSaleOrigin,
                    service: relations.service,
                    status: relations.status,
                    user: (relations.user as true) && {
                        include: {
                            role: true,
                            status: true,
                        },
                    },
                },
            });

            return this.wrappers.dalToDom(guide);
        } catch (e) {
            if (e instanceof PrismaRequestError)
                throw new StorageError(new PrismaError(e));

            throw new StorageError(e);
        }
    };

    findNovelties = async (): Promise<TGuideServiceNoveltyDOM[]> => {
        try {
            return await prisma.guide_Service_Novelty.findMany();
        } catch (e) {
            if (e instanceof PrismaRequestError)
                throw new StorageError(new PrismaError(e));

            throw new StorageError(e);
        }
    };

    findServicesType = async (): Promise<TGuideServiceTypeServiceDOM[]> => {
        try {
            return await prisma.guide_Service_Type.findMany();
        } catch (e) {
            if (e instanceof PrismaRequestError)
                throw new StorageError(new PrismaError(e));

            throw new StorageError(e);
        }
    };

    createOne = async (guide: TGuideServiceDOM): Promise<TGuideServiceDOM> => {
        try {
            const newGuide = await this.db.create({
                data: {
                    ...this.wrappers.domToDal(guide),
                    commodity: guide.commodity,
                    status: undefined,
                    novelty: undefined,
                    service: undefined,
                    user: undefined,
                    point_sale_origin: undefined,
                    point_sale_destination: undefined,
                    client_legal_destination: undefined,
                    client_legal_origin: undefined,
                    client_natural_destination: undefined,
                    client_natural_origin: undefined,
                },
                include: {
                    client_legal_destination: {
                        include: {
                            status: true,
                        },
                    },
                    client_legal_origin: {
                        include: {
                            status: true,
                        },
                    },
                    client_natural_destination: {
                        include: {
                            status: true,
                        },
                    },
                    client_natural_origin: {
                        include: {
                            status: true,
                        },
                    },
                    point_sale_origin: true,
                    point_sale_destination: true,
                },
            });

            return this.wrappers.dalToDom(newGuide);
        } catch (e) {
            console.log({ e });

            if (e instanceof PrismaRequestError)
                throw new StorageError(new PrismaError(e));

            throw new StorageError(e);
        }
    };

    createMany = async (guides: TGuideServiceDOM[]): Promise<number> => {
        try {
            const { count } = await this.db.createMany({
                data: guides.map((guide) => ({
                    ...this.wrappers.domToDal(guide),
                    commodity: guide.commodity,
                    status: undefined,
                    novelty: undefined,
                    service: undefined,
                    user: undefined,
                    point_sale_origin: undefined,
                    point_sale_destination: undefined,
                    client_legal_destination: undefined,
                    client_legal_origin: undefined,
                    client_natural_destination: undefined,
                    client_natural_origin: undefined,
                })),
            });

            return count;
        } catch (e) {
            if (e instanceof PrismaRequestError)
                throw new StorageError(new PrismaError(e));

            throw new StorageError(e);
        }
    };

    updateOne = async (guide: TGuideServiceDOM): Promise<TGuideServiceDOM> => {
        try {
            const updateGuide = await this.db.update({
                where: { id: guide.id },
                data: {
                    ...this.wrappers.domToDal(guide),
                    commodity: guide.commodity,
                    status: undefined,
                    novelty: undefined,
                    collection: undefined,
                    service: undefined,
                    user: undefined,
                    point_sale_origin: undefined,
                    point_sale_destination: undefined,
                    client_legal_destination: undefined,
                    client_legal_origin: undefined,
                    client_natural_destination: undefined,
                    client_natural_origin: undefined,
                },
                include: {
                    client_legal_destination: {
                        include: {
                            status: true,
                        },
                    },
                    client_legal_origin: {
                        include: {
                            status: true,
                        },
                    },
                    client_natural_destination: {
                        include: {
                            status: true,
                        },
                    },
                    client_natural_origin: {
                        include: {
                            status: true,
                        },
                    },
                    point_sale_origin: true,
                    point_sale_destination: true,
                },
            });

            return this.wrappers.dalToDom(updateGuide);
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

    filterDomToDal = (filter: TGuideServiceFilterDOM): TGuideServiceFilterDAL => {
        const options: TGuideServiceFilterDAL = {};

        Object.keys(filter).forEach((key) => {
            const value = filter[key as keyof TGuideServiceFilterDOM];
            if (!value) return;

            this.ifFilterDal[key as keyof TGuideServiceFilterDOM](value, options);
        });

        return options;
    };
}
