import type {
    TGuideServiceFilterDOM,
    TGuideServiceRelations,
    TGuideServiceDOM,
    TGuideServiceNoveltyDOM,
    TGuideServiceTypeServiceDOM,
} from '../entities';

export type TGuideServiceRepository = {
    findAll: (
        filter: TGuideServiceFilterDOM,
        options: TGuideServiceRelations,
    ) => Promise<TGuideServiceDOM[]>;
    findOne: (id: string, relations: TGuideServiceRelations) => Promise<TGuideServiceDOM>;
    count: (filter: TGuideServiceFilterDOM) => Promise<number>;
    findNovelties: () => Promise<TGuideServiceNoveltyDOM[]>;
    findServicesType: () => Promise<TGuideServiceTypeServiceDOM[]>;
    createOne: (guide: TGuideServiceDOM) => Promise<TGuideServiceDOM>;
    createMany: (guides: TGuideServiceDOM[]) => Promise<number>;
    updateOne: (guide: TGuideServiceDOM) => Promise<TGuideServiceDOM>;
    deleteOne: (id: string) => Promise<void>;
};
