import Elysia from 'elysia';
import { UsersControllers } from '../controllers';
import { UsersServices } from '@users/app/services';
import { UsersPrismaRepository } from '../storages/prisma/implementations';
import { createId } from '../tools';
import { getDateFormat } from '../tools';

const controllers = new UsersControllers(
    new UsersServices(new UsersPrismaRepository(), createId, getDateFormat),
);

export const usersRouter = new Elysia();

usersRouter.group('users', (app) => {
    app.get('get-all', controllers.getAll);
    app.get('get-one/:id', controllers.getOne);
    app.post('create-one', controllers.createOne);
    app.post('create-many', controllers.createMany);
    app.put('update-one/:id', controllers.updateOne);
    app.delete('delete-one/:id', controllers.deleteOne);

    return app;
});
