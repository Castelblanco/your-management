import type {
    TGuideServiceRelations,
    TGuideServiceDOM,
    TGuideServiceFilterDOM,
    TGuideServiceOPT,
    TGuideServiceNoveltyDOM,
    TGuideServiceTypeServiceDOM,
} from '../entities';

export type TGuideServiceRepository = {
    findAll: (
        filter: TGuideServiceFilterDOM,
        options: TGuideServiceOPT,
    ) => Promise<TGuideServiceDOM[]>;
    findOne: (id: string, relations: TGuideServiceRelations) => Promise<TGuideServiceDOM>;
    findNovelties: () => Promise<TGuideServiceNoveltyDOM[]>;
    findServicesType: () => Promise<TGuideServiceTypeServiceDOM[]>;
    createOne: (guide: TGuideServiceDOM) => Promise<TGuideServiceDOM>;
    createMany: (guides: TGuideServiceDOM[]) => Promise<number>;
    updateOne: (guide: TGuideServiceDOM) => Promise<TGuideServiceDOM>;
    deleteOne: (id: string) => Promise<void>;
};
