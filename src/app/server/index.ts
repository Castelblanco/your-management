import { connectPrisma } from '@db/prisma';
import { server } from './server';

const initServer = async (): Promise<void> => {
    try {
        await connectPrisma();
        await server();
    } catch (e) {
        console.log(e);
        console.log('Error init server');
    }
};

await initServer();
