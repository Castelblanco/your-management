import { CitiesMappers } from '@cities/app/mappers';
import { CitiesServices } from '@cities/app/services';
import { TCityAPI } from '@cities/domain/dto';
import { TCityDOM } from '@cities/domain/entities';
import { HttpSuccessCode } from '@common/enums/success_enum';
import { TMappers } from '@common/mappers_wrappers/mappers';
import { ApiReponse } from '@common/response/success/api_responses';
import { ListResponse } from '@common/response/success/list_responses';
import { Context } from 'elysia';

type TContext = Context<{
    params: Record<string, string>;
}>;

export class CitiesControllers {
    private readonly services: CitiesServices;
    private readonly mappers: TMappers<TCityDOM, TCityAPI>;

    constructor(services: CitiesServices) {
        this.services = services;
        this.mappers = new CitiesMappers();
    }

    findAll = async ({ query }: TContext): Promise<ListResponse<TCityAPI>> => {
        try {
            const {
                limit,
                offset,
                pointSales,
                users,
                departmentId,
                name,
                statusId,
            } = query;

            const cities = await this.services.findAll(
                {
                    departmentId: departmentId || undefined,
                    name: name || undefined,
                    statusId: statusId || undefined,
                },
                {
                    limit: limit ? +limit : 50,
                    offset: offset ? +offset : 0,
                    pointSales: !!pointSales,
                    users: !!users,
                },
            );

            return new ListResponse(
                cities.map(this.mappers.domToApi),
                HttpSuccessCode.SUCCESSFUL,
            );
        } catch (e) {
            throw e;
        }
    };

    findOne = async ({
        params,
        query,
    }: TContext): Promise<ApiReponse<TCityAPI>> => {
        try {
            const city = await this.services.findOne(
                params.id,
                !!query.pointSales,
            );

            return new ApiReponse(
                this.mappers.domToApi(city),
                HttpSuccessCode.SUCCESSFUL,
            );
        } catch (e) {
            throw e;
        }
    };

    createOne = async ({
        body,
        set,
    }: TContext): Promise<ApiReponse<TCityAPI>> => {
        try {
            const city = await this.services.createOne(
                this.mappers.apiToDom(body as TCityAPI),
            );

            set.status = HttpSuccessCode.CREATED;
            return new ApiReponse(
                this.mappers.domToApi(city),
                HttpSuccessCode.CREATED,
            );
        } catch (e) {
            throw e;
        }
    };

    createMany = async ({
        body,
        set,
    }: TContext): Promise<ApiReponse<number>> => {
        try {
            const cities = body as TCityAPI[];
            const count = await this.services.createMany(
                cities.map(this.mappers.apiToDom),
            );

            set.status = HttpSuccessCode.CREATED;
            return new ApiReponse(count, HttpSuccessCode.CREATED);
        } catch (e) {
            throw e;
        }
    };

    updateOne = async ({
        body,
        params,
    }: TContext): Promise<ApiReponse<TCityAPI>> => {
        try {
            const city = body as TCityAPI;
            if (!city._id) city._id = params.id;

            const updateCity = await this.services.updateOne(
                this.mappers.apiToDom(body as TCityAPI),
            );

            return new ApiReponse(
                this.mappers.domToApi(updateCity),
                HttpSuccessCode.CREATED,
            );
        } catch (e) {
            throw e;
        }
    };

    deleteOne = async ({ params, set }: TContext): Promise<void> => {
        try {
            await this.services.deleteOne(params.id);

            set.status = HttpSuccessCode.NOT_CONTENT;
            return;
        } catch (e) {
            throw e;
        }
    };
}
