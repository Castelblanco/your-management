import Elysia from 'elysia';
import { DepartmentsController } from '../controllers';
import { DepartmentPrismaRepository } from '../storages/prisma/implementations';
import { createId } from '../tools/create_id';
import { DepartmentsServices } from 'modules/departments/app/services';

const controller = new DepartmentsController(
    new DepartmentsServices(new DepartmentPrismaRepository(), createId),
);

export const departmentsRouters = new Elysia();

departmentsRouters.group('/departments', (app) => {
    app.get('get-all', controller.findAll);
    app.get('get-one/:id', controller.findOne);
    app.post('create-one', controller.createOne);
    app.post('create-many', controller.createMany);
    app.put('update-one/:id', controller.updateOne);
    app.delete('delete-one/:id', controller.deleteOne);

    return app;
});
