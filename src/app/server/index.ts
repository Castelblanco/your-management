import { server } from './server';

(async () => {
    try {
        await server();
    } catch (e) {
        console.log(e);
        console.log('Error init server');
    }
})();
