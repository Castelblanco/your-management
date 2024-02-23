import {
    type TGuideServiceFilterDOM,
    type TGuideServiceDOM,
    type TGuideServiceRelations,
    type TGuideServiceOPT,
} from '@guides_service/domain/entities';
import { type TGuideServiceRepository } from '@guides_service/domain/repository';
import { buildFindAll } from './find_all';
import { buildFindOne } from './find_one';
import { buildCreateOne } from './create_one';
import { buildCreateMany } from './create_many';
import { buildUpdateOne } from './update_one';
import { buildDeleteOne } from './delete_one';

export type Dependencies = {
    repository: TGuideServiceRepository;
    createId: () => string;
};

export class GuideServiceServices {
    findAll: (
        filter: TGuideServiceFilterDOM,
        options: TGuideServiceOPT,
    ) => Promise<TGuideServiceDOM[]>;

    findOne: (id: string, relations: TGuideServiceRelations) => Promise<TGuideServiceDOM>;
    createOne: (guide: TGuideServiceDOM) => Promise<TGuideServiceDOM>;
    createMany: (guides: TGuideServiceDOM[]) => Promise<number>;
    updateOne: (guide: TGuideServiceDOM) => Promise<TGuideServiceDOM>;
    deleteOne: (id: string) => Promise<void>;

    constructor(dependencies: Dependencies) {
        this.findAll = buildFindAll(dependencies);
        this.findOne = buildFindOne(dependencies);
        this.createOne = buildCreateOne(dependencies);
        this.createMany = buildCreateMany(dependencies);
        this.updateOne = buildUpdateOne(dependencies);
        this.deleteOne = buildDeleteOne(dependencies);
    }
}
