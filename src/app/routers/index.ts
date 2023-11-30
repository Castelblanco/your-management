import Elysia from 'elysia';
import { routerV1 } from './v1';
import { HealthyController } from '@common/controller/healthy';

const controller = new HealthyController();

export const routers = new Elysia();

routers.use(routerV1);
routers.get('/', controller.get);
