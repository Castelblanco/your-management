import { TGuideServiceFilterDOM } from '@guides_service/domain/entities';
import { TDependencies } from '.';

export const buildRouterReport = ({ repository, exporter }: TDependencies) => {
    const service = async (filters: TGuideServiceFilterDOM) => {
        const [guides, services] = await Promise.all([
            repository.findAll(
                {
                    ...filters,
                    collection: true,
                },
                {
                    user: true,
                    pointSaleOrigin: true,
                    service: true,
                },
            ),
            repository.findServicesType(),
        ]);
        return await exporter.router(guides, services);
    };
    return service;
};
