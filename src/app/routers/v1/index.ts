import { citiesRouters } from '@cities/insfrastructure/routers';
import { departamentsRouters } from '@departaments/infrastructure/routers';
import { pointSalesRouters } from '@point_sales/insfrastructure/routers';
import { statusCodeRouters } from '@status_codes/infrastructure/routers';
import { userRolesRouters } from '@user_roles/infrastructure/routers';
import { usersRouter } from '@users/infrastructure/routers';
import Elysia from 'elysia';

export const routerV1 = new Elysia();

routerV1.group('v1', (group) => {
    group.use(statusCodeRouters);
    group.use(userRolesRouters);
    group.use(departamentsRouters);
    group.use(citiesRouters);
    group.use(pointSalesRouters);
    group.use(usersRouter);

    return group;
});
