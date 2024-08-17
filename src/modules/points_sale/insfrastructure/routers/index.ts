import Elysia from 'elysia';
import { PointsSaleControllers } from '../controllers';
import { PointsSaleServices } from 'modules/points_sale/app/services';
import { PointsSalePrismaRepository } from '../storages/prisma/implementations';
import { createId } from '../tools';

const controllers = new PointsSaleControllers(
    new PointsSaleServices({
        repository: new PointsSalePrismaRepository(),
        createId,
    }),
);

export const pointsSaleRouters = new Elysia();

pointsSaleRouters.group('point-sales', (app) => {
    app.get('get-all', controllers.findAll);
    app.get('get-one/:id', controllers.findOne);
    app.post('create-one', controllers.createOne);
    app.post('create-many', controllers.createMany);
    app.put('update-one/:id', controllers.updateOne);
    app.delete('delete-one/:id', controllers.deleteOne);

    return app;
});
