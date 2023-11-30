import { departamentsRouters } from '@departaments/infrastructure/routers';
import { statusCodeRouters } from '@status_codes/infrastructure/routers';
import { userRolesRouters } from '@user_roles/infrastructure/routers';
import Elysia from 'elysia';

export const routerV1 = new Elysia();

routerV1.group('v1', (group) => {
    group.use(statusCodeRouters);
    group.use(userRolesRouters);
    group.use(departamentsRouters);
    return group;
});
