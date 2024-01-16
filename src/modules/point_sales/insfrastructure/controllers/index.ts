import type { TMappers } from '@common/mappers_wrappers/mappers';
import type { PointSalesServices } from '@point_sales/app/services';
import type { TPointSaleAPI } from '@point_sales/domain/dto';
import type { TPointSaleDOM } from '@point_sales/domain/entities';
import type { Context } from 'elysia';

import { HttpSuccessCode } from '@common/enums/success_enum';
import { ApiReponse } from '@common/response/success/api_responses';
import { ListResponse } from '@common/response/success/list_responses';
import { PointSalesMappers } from '@point_sales/app/mappers';

type TContext = Context<{
    params: Record<string, string>;
}>;

export class PointSalesControllers {
    services: PointSalesServices;
    mappers: TMappers<TPointSaleDOM, TPointSaleAPI>;

    constructor(services: PointSalesServices) {
        this.services = services;
        this.mappers = new PointSalesMappers();
    }

    findAll = async ({ query }: Context): Promise<ListResponse<TPointSaleAPI>> => {
        try {
            const points = await this.services.findAll(
                {
                    cityId: query.cityId || undefined,
                    name: query.name || undefined,
                    statusId: query.statusId || undefined,
                },
                {
                    limit: query.limit ? +query.limit : 50,
                    offset: query.offset ? +query.offset : 0,
                    users: !!query.users,
                },
            );

            return new ListResponse(
                points.map(this.mappers.domToApi),
                HttpSuccessCode.SUCCESSFUL,
            );
        } catch (e) {
            throw e;
        }
    };

    findOne = async ({ params }: TContext): Promise<ApiReponse<TPointSaleAPI>> => {
        try {
            const point = await this.services.findOne(params.id);

            return new ApiReponse(
                this.mappers.domToApi(point),
                HttpSuccessCode.SUCCESSFUL,
            );
        } catch (e) {
            throw e;
        }
    };

    createOne = async ({ body, set }: TContext): Promise<ApiReponse<TPointSaleAPI>> => {
        try {
            const newPoint = await this.services.createOne(
                this.mappers.apiToDom(body as TPointSaleAPI),
            );

            set.status = HttpSuccessCode.CREATED;
            return new ApiReponse(
                this.mappers.domToApi(newPoint),
                HttpSuccessCode.CREATED,
            );
        } catch (e) {
            throw e;
        }
    };

    createMany = async ({ body, set }: TContext): Promise<ApiReponse<number>> => {
        try {
            const count = await this.services.createMany(
                (body as TPointSaleAPI[]).map(this.mappers.apiToDom),
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
    }: TContext): Promise<ApiReponse<TPointSaleAPI>> => {
        try {
            const point = body as TPointSaleAPI;
            if (!point._id) point._id = params.id;

            const updatePoint = await this.services.updateOne(
                this.mappers.apiToDom(point),
            );

            return new ApiReponse(
                this.mappers.domToApi(updatePoint),
                HttpSuccessCode.SUCCESSFUL,
            );
        } catch (e) {
            throw e;
        }
    };

    deleteOne = async ({ params, set }: TContext): Promise<void> => {
        try {
            await this.services.deleteOne(params.id);
            set.status = HttpSuccessCode.NOT_CONTENT;
        } catch (e) {
            throw e;
        }
    };
}
