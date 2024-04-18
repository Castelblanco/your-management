import Elysia from 'elysia';
import { cors } from '@elysiajs/cors';
import { handleError } from './handle_error';
import { ElysiaLogging } from '@otherguy/elysia-logging';

const PORT = Bun.env.PORT ?? 5000;
const app = new Elysia();

const routers = async (): Promise<void> => {
    const { routers } = await import('../routers');
    app.use(routers);
};

const middleware = (): void => {
    app.use(
        cors({
            methods: '*',
        }),
    );
    app.use(ElysiaLogging());
};

const initHandleError = (): void => {
    app.onError(handleError);
};

export const server = async (): Promise<void> => {
    middleware();
    initHandleError();
    await routers();

    app.listen(PORT, ({ hostname, port }) => {
        console.log(`Server Elysia running in http://${hostname}:${port}`);
    });
};
