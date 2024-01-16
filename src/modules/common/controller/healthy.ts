import { version } from '../../../../package.json';

export type THealthy = {
    version: string;
    message: string;
};

export class HealthyController {
    get = (): THealthy => {
        return {
            version,
            message: 'server running 👩‍💻',
        };
    };
}
