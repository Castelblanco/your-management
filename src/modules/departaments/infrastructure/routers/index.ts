import Elysia from 'elysia';
import { DepartamentsController } from '../controllers';
import { DepartamentPrismaRepository } from '../storages/prisma/implementations';
import { createId } from '../tools/create_id';
import { DepartamentsServices } from '@departaments/app/services';

const controller = new DepartamentsController(
    new DepartamentsServices(new DepartamentPrismaRepository(), createId),
);

export const departamentsRouters = new Elysia();

departamentsRouters.group('/departaments', (app) => {
    app.get('get-all', controller.findAll);
    app.get('get-one/:id', controller.findOne);
    app.post('create-one', controller.createOne);
    app.post('create-many', controller.createMany);
    app.put('update-one/:id', controller.updateOne);
    app.delete('delete-one/:id', controller.deleteOne);

    return app;
});
