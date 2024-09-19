import { Elysia } from 'elysia';
import { GuideServiceControllers } from '../controllers';
import { GuideServiceServices } from '@guides_service/app/services';
import { createId } from '../tools';
import { GuideServicePrismaRepository } from '../storages/prisma/implementations';
import {
    validGuideInfoCreate,
    validGuideInfoUpdate,
    validQueryFilter,
} from '../middleware';

export const guideServiceRouter = new Elysia();

const controller = new GuideServiceControllers(
    new GuideServiceServices({
        createId,
        repository: new GuideServicePrismaRepository(),
    }),
);

guideServiceRouter.group('/guides_service', (app) => {
    app.guard(
        {
            beforeHandle: [validQueryFilter],
        },
        (route) => {
            route.get('get-all', controller.findAll);
            return route;
        },
    );

    app.guard(
        {
            body: validGuideInfoCreate,
        },
        (route) => {
            route.post('create-one', controller.createOne);
            return route;
        },
    );

    app.guard(
        {
            body: validGuideInfoUpdate,
        },
        (route) => {
            route.put('update-one/:id', controller.updateOne);
            return route;
        },
    );

    app.get('get-one/:id', controller.findOne);
    app.get('get-novelties', controller.findNovelties);
    app.get('get-services-type', controller.findServicesType);
    app.post('create-many', controller.createMany);
    app.delete('delete-one/:id', controller.deleteOne);

    return app;
});
