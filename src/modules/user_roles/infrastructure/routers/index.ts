import Elysia from 'elysia';
import { UserRolesController } from '../controllers';
import { UserRolesServices } from '@user_roles/app/services';
import { UserRolesPrismaRepository } from '../storages/prisma/implementations';
import { createId } from '../tools/create_id';

const controller = new UserRolesController(
    new UserRolesServices(new UserRolesPrismaRepository(), createId),
);

export const userRolesRouters = new Elysia();

userRolesRouters.group('/user-roles', (app) => {
    app.get('get-all', controller.findAll);
    app.get('get-one/:id', controller.findOne);
    app.post('create-one', controller.createOne);
    app.post('create-many', controller.createMany);
    app.put('update-one/:id', controller.updateOne);
    app.delete('delete-one/:id', controller.deleteOne);

    return app;
});
