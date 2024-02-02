import { version, name } from '../../../../package.json';

export type THealthy = {
    version: string;
    message: string;
    name: string;
};

export class HealthyController {
    get = (): THealthy => {
        return {
            version,
            message: 'server running 👩‍💻',
            name,
        };
    };
}
