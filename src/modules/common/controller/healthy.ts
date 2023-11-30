import { version } from '../../../../package.json';

export type Healthy = {
    version: string;
    message: string;
};

export class HealthyController {
    get = (): Healthy => {
        return {
            version,
            message: 'server running 👩‍💻',
        };
    };
}
