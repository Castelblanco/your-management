import { statusCodeRouters } from '@status_codes/infrastructure/routers';
import Elysia from 'elysia';

export const routerV1 = new Elysia();

routerV1.group('v1', (group) => {
    group.use(statusCodeRouters);
    return group;
});
