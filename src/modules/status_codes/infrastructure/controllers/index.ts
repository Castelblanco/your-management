import { TMappers } from '@common/mappers_wrappers/mappers';
import { ApiError } from '@common/response/errors/api_error';
import { StatusCodeMappers } from '@status_codes/app/mappers';
import { StatusCodeServices } from '@status_codes/app/services';
import { TStatusCodeApi } from '@status_codes/domain/dto';
import { TStatusCodeDOM } from '@status_codes/domain/entities';
import { Context } from 'elysia';

export class StatusCodeController {
    private readonly services: StatusCodeServices;
    private readonly mappers: TMappers<TStatusCodeDOM, TStatusCodeApi>;

    constructor(services: StatusCodeServices) {
        this.services = services;
        this.mappers = new StatusCodeMappers();
    }

    findAll = async (ctx: Context): Promise<TStatusCodeDOM[]> => {
        try {
            const status = await this.services.findAll();

            return status.map(this.mappers.domToApi);
        } catch (e) {
            throw e;
        }
    };

    createOne = async ({ body }: Context): Promise<TStatusCodeDOM> => {
        try {
            const status = await this.services.createOne(
                this.mappers.apiToDom(body as TStatusCodeApi)
            );

            return this.mappers.domToApi(status);
        } catch (e) {
            throw e;
        }
    };
}
