import Elysia from 'elysia';
import { StatusCodeController } from '../controllers';
import { StatusCodeServices } from '@status_codes/app/services';
import { StatusCodePrismaRepository } from '../storages/prisma/implementations';
import { createId } from '../tools/create_id';

const controller = new StatusCodeController(
    new StatusCodeServices(new StatusCodePrismaRepository(), createId)
);

export const statusCodeRouters = new Elysia();

statusCodeRouters.group('/status-code', (app) => {
    app.get('get-all', controller.findAll);
    app.post('create-one', controller.createOne);

    return app;
});
