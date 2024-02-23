import {
    type TGuideServiceRelations,
    type TGuideServiceDOM,
    type TGuideServiceFilterDOM,
    type TGuideServiceOPT,
} from '../entities';

export type TGuideServiceRepository = {
    findAll: (
        filter: TGuideServiceFilterDOM,
        options: TGuideServiceOPT,
    ) => Promise<TGuideServiceDOM[]>;
    findOne: (id: string, relations: TGuideServiceRelations) => Promise<TGuideServiceDOM>;
    createOne: (guide: TGuideServiceDOM) => Promise<TGuideServiceDOM>;
    createMany: (guides: TGuideServiceDOM[]) => Promise<number>;
    updateOne: (guide: TGuideServiceDOM) => Promise<TGuideServiceDOM>;
    deleteOne: (id: string) => Promise<void>;
};
