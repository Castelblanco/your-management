import { Elysia } from 'elysia';
import { NaturalClientControllers } from '../controllers';
import { NaturalClientServices } from '@clients_natural/app/services';
import { createId } from '../tools';
import { NaturalClientPrismaRepository } from '../storages/prisma/implementations';

export const naturalClientRouter = new Elysia();

const controllers = new NaturalClientControllers(
    new NaturalClientServices({
        createId,
        repository: new NaturalClientPrismaRepository(),
    }),
);

naturalClientRouter.group('/clients/naturals', (app) => {
    app.get('get-all', controllers.findAll);
    app.get('get-one/:id', controllers.findOne);
    app.post('create-one', controllers.createOne);
    app.post('create-many', controllers.createMany);
    app.put('update-one/:id', controllers.updateOne);
    app.delete('delete-one/:id', controllers.deleteOne);
    return app;
});
