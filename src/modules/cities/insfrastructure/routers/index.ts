import Elysia from 'elysia';
import { CitiesControllers } from '../controllers';
import { CitiesServices } from '@cities/app/services';
import { CitiesPrismaRepository } from '../storages/prisma/implementations';
import { createId } from '../tools';

const controllers = new CitiesControllers(
    new CitiesServices(new CitiesPrismaRepository(), createId),
);

export const citiesRouters = new Elysia();

citiesRouters.group('cities', (app) => {
    app.get('get-all', controllers.findAll);
    app.get('get-one/:id', controllers.findOne);
    app.post('create-one', controllers.createOne);
    app.post('create-many', controllers.createMany);
    app.put('update-one/:id', controllers.updateOne);
    app.delete('delete-one/:id', controllers.deleteOne);

    return app;
});
