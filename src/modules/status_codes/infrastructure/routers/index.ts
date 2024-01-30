import Elysia from 'elysia';
import { StatusCodeController } from '../controllers';
import { StatusCodeServices } from '@status_codes/app/services';
import { StatusCodePrismaRepository } from '../storages/prisma/implementations';
import { createId } from '../tools/create_id';
import { validStatusCode, validStatusCodeList } from '../middleware/valid_status_code';

const controller = new StatusCodeController(
    new StatusCodeServices(new StatusCodePrismaRepository(), createId),
);

export const statusCodeRouters = new Elysia();

statusCodeRouters.group('/status-code', (app) => {
    app.get('get-all', controller.findAll);
    app.get('get-one/:id', controller.findOne);
    app.post('create-one', controller.createOne, {
        body: validStatusCode,
    });
    app.post('create-many', controller.createMany, {
        body: validStatusCodeList,
    });
    app.put('update-one/:id', controller.updateOne, {
        body: validStatusCode,
    });
    app.delete('delete-one/:id', controller.deleteOne);

    return app;
});
