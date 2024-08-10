import Elysia from 'elysia';
import { cors } from '@elysiajs/cors';
import { ApiError } from '@common/response/errors/api_error';
import pino from 'pino';
import { ErrorBadRequest } from '@common/response/errors/bad_request';
import { BaseError } from '@common/response/errors/base_error';

const PORT = Bun.env.PORT ?? 5000;
const app = new Elysia();
const logger = pino();

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
    app.use((req) => {
        const initTime = Date.now();
        req.onResponse(({ request, path, set }) => {
            const { method } = request;
            const statusCode = +`${set.status}`;
            const now = Date.now() - initTime;

            if (statusCode >= 400) {
                logger.error(`${method} ${path} ${statusCode} ${now}ms`);
            } else {
                logger.info(`${method} ${path} ${statusCode} ${now}ms`);
            }
        });

        return req;
    });
};

const initHandleError = (): void => {
    app.onError(({ error, set, code }) => {
        if (code === 'VALIDATION') {
            const err = new ErrorBadRequest(code, JSON.parse(error.message));
            set.status = err.code;
            return new ApiError(err);
        }

        const err = new ApiError(error);
        set.status = err.code;
        return err;
    });
};

export const server = async (): Promise<void> => {
    middleware();
    initHandleError();
    await routers();

    app.listen(PORT, ({ hostname, port }) => {
        console.log(`Server Elysia running in http://${hostname}:${port}`);
    });
};
