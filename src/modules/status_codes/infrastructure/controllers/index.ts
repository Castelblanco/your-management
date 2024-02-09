import { HttpSuccessCode } from '@common/enums/success_enum';
import { ApiReponse } from '@common/response/success/api_responses';
import { ListResponse } from '@common/response/success/list_responses';
import { StatusCodeMappers } from '@status_codes/app/mappers';

import { type TMappers } from '@common/mappers_wrappers/mappers';
import type { StatusCodeServices } from '@status_codes/app/services';
import { type TStatusCodeAPI } from '@status_codes/domain/dto';
import type { TStatusCodeType, TStatusCodeDOM } from '@status_codes/domain/entities';
import { type Context } from 'elysia';

type TContext = Context<{
    params: Record<string, string>;
}>;
export class StatusCodeController {
    private readonly services: StatusCodeServices;
    private readonly mappers: TMappers<TStatusCodeDOM, TStatusCodeAPI>;

    constructor(services: StatusCodeServices) {
        this.services = services;
        this.mappers = new StatusCodeMappers();
    }

    findAll = async ({ query }: TContext): Promise<ListResponse<TStatusCodeAPI>> => {
        try {
            const status = await this.services.findAll(query.type as TStatusCodeType);

            return new ListResponse(
                status.map(this.mappers.domToApi),
                HttpSuccessCode.SUCCESSFUL,
            );
        } catch (e) {
            throw e;
        }
    };

    findOne = async ({
        query,
        params,
    }: TContext): Promise<ApiReponse<TStatusCodeAPI>> => {
        try {
            const status = await this.services.findOne(
                query.type as TStatusCodeType,
                params.id,
            );

            return new ApiReponse(
                this.mappers.domToApi(status),
                HttpSuccessCode.SUCCESSFUL,
            );
        } catch (e) {
            throw e;
        }
    };

    createOne = async ({
        body,
        set,
        query,
    }: TContext): Promise<ApiReponse<TStatusCodeAPI>> => {
        try {
            const status = await this.services.createOne(
                query.type as TStatusCodeType,
                this.mappers.apiToDom(body as TStatusCodeAPI),
            );

            set.status = HttpSuccessCode.CREATED;
            return new ApiReponse(this.mappers.domToApi(status), HttpSuccessCode.CREATED);
        } catch (e) {
            throw e;
        }
    };

    createMany = async ({ body, set, query }: TContext): Promise<ApiReponse<number>> => {
        try {
            const status = body as TStatusCodeAPI[];
            const count = await this.services.createMany(
                query.type as TStatusCodeType,
                status.map(this.mappers.apiToDom),
            );

            set.status = HttpSuccessCode.CREATED;
            return new ApiReponse(count, HttpSuccessCode.CREATED);
        } catch (e) {
            throw e;
        }
    };

    updateOne = async ({
        body,
        query,
        params,
    }: TContext): Promise<ApiReponse<TStatusCodeAPI>> => {
        try {
            const statusBody = body as TStatusCodeAPI;
            if (!statusBody._id) statusBody._id = params.id;

            const status = await this.services.updateOne(
                query.type as TStatusCodeType,
                this.mappers.apiToDom(statusBody),
            );

            return new ApiReponse(this.mappers.domToApi(status), HttpSuccessCode.CREATED);
        } catch (e) {
            throw e;
        }
    };

    deleteOne = async ({ params, set, query }: TContext): Promise<void> => {
        try {
            await this.services.deleteOne(query.type as TStatusCodeType, params.id);
            set.status = HttpSuccessCode.NOT_CONTENT;
        } catch (e) {
            throw e;
        }
    };
}
