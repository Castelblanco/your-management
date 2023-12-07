import Elysia from 'elysia';
import { PointSalesControllers } from '../controllers';
import { PointSalesServices } from '@point_sales/app/services';
import { PointSalesPrismaRepository } from '../storages/prisma/implementations';
import { createId } from '../tools';

const controllers = new PointSalesControllers(
    new PointSalesServices(new PointSalesPrismaRepository(), createId),
);

export const pointSalesRouters = new Elysia();

pointSalesRouters.group('point-sales', (app) => {
    app.get('get-all', controllers.findAll);
    app.get('get-one/:id', controllers.findOne);
    app.post('create-one', controllers.createOne);
    app.post('create-many', controllers.createMany);
    app.put('update-one/:id', controllers.updateOne);
    app.delete('delete-one/:id', controllers.deleteOne);

    return app;
});
