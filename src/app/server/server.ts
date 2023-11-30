import Elysia from 'elysia';
import { cors } from '@elysiajs/cors';

const PORT = Bun.env.PORT || 5000;

const app = new Elysia();

const routers = async () => {
    const { routers } = await import('../routers');
    app.use(routers);
};

const middleware = () => {
    app.use(cors());
};

const handleError = () => {
    app.onError(handleError);
};

export const server = async () => {
    middleware();
    handleError();
    await routers();

    app.listen(PORT, (server) => {
        console.log(`Server Elysia running in http://localhost:${server.port}`);
    });
};
