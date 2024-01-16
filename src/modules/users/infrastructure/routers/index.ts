import Elysia from 'elysia';
import { UsersControllers } from '../controllers';
import { UsersServices } from '@users/app/services';
import { UsersPrismaRepository } from '../storages/prisma/implementations';
import { createId, singToken, getDateFormat } from '../tools';
import { buildCheckLogin } from '../middlewares';
import { verifyPassword } from '../tools/encrypt';

const repository = new UsersPrismaRepository();

const controllers = new UsersControllers(
    new UsersServices(repository, createId, getDateFormat, singToken),
);

const checkLogin = buildCheckLogin({ repository, verifyPassword });

export const usersRouter = new Elysia();

usersRouter.group('users', (app) => {
    app.get('get-all', controllers.getAll);
    app.get('get-one/:id', controllers.getOne);
    app.post('create-one', controllers.createOne);
    app.guard({
        beforeHandle: [checkLogin],
    }).post('login', controllers.login);
    app.post('create-many', controllers.createMany);
    app.put('update-one/:id', controllers.updateOne);
    app.delete('delete-one/:id', controllers.deleteOne);

    return app;
});
