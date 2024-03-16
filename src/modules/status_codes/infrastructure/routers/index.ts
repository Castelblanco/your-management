import Elysia from 'elysia';
import { StatusCodeController } from '../controllers';
import { StatusCodeServices } from '@status_codes/app/services';
import {
    StatusCodeClientsPrismaOperations,
    StatusCodeGuidesServicePrismaOperations,
    StatusCodePointsSalePrismaOperations,
    StatusCodeUsersPrismaRepository,
} from '../storages/prisma/implementations';
import { createId } from '../tools/create_id';
import { validStatusCode, validStatusCodeList } from '../middleware/valid_status_code';
import type { TStatusCodeType } from '@status_codes/domain/entities';
import type { TStatusCodeOperations } from '@status_codes/domain/repository';
import { validTypeStatus } from '../middleware/valid_type_status';

const repository: Record<TStatusCodeType, TStatusCodeOperations> = {
    clients: new StatusCodeClientsPrismaOperations(),
    guides_service: new StatusCodeGuidesServicePrismaOperations(),
    points_sale: new StatusCodePointsSalePrismaOperations(),
    users: new StatusCodeUsersPrismaRepository(),
};

const controller = new StatusCodeController(new StatusCodeServices(repository, createId));

export const statusCodeRouters = new Elysia();

statusCodeRouters.group('/status-code', (app) => {
    app.guard(
        {
            beforeHandle: [validTypeStatus],
        },
        (route) => {
            route.get('get-all', controller.findAll);
            route.get('get-one/:id', controller.findOne);
            route.post('create-one', controller.createOne, {
                body: validStatusCode,
            });
            route.post('create-many', controller.createMany, {
                body: validStatusCodeList,
            });
            route.put('update-one/:id', controller.updateOne, {
                body: validStatusCode,
            });
            route.delete('delete-one/:id', controller.deleteOne);
            return route;
        },
    );
    return app;
});
