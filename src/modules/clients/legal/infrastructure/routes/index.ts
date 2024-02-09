import { Elysia } from 'elysia';
import { LegalClientControllers } from '../controllers';
import { LegalClientServices } from '@clients_legal/app/services';
import { createId } from '../tools';
import { LegalClientPrismaRepository } from '../storages/prisma/implementations';

export const legalClientRouter = new Elysia();

const controllers = new LegalClientControllers(
    new LegalClientServices({
        createId,
        repository: new LegalClientPrismaRepository(),
    }),
);

legalClientRouter.group('/clients/legals', (app) => {
    app.get('get-all', controllers.findAll);
    app.get('get-one/:id', controllers.findOne);
    app.post('create-one', controllers.createOne);
    app.post('create-many', controllers.createMany);
    app.put('update-one/:id', controllers.updateOne);
    app.delete('delete-one/:id', controllers.deleteOne);
    return app;
});
