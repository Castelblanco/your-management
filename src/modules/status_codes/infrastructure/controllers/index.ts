import { HttpSuccessCode } from '@common/enums/success_enum';
import { type TMappers } from '@common/mappers_wrappers/mappers';
import { ApiReponse } from '@common/response/success/api_responses';
import { ListResponse } from '@common/response/success/list_responses';
import { StatusCodeMappers } from '@status_codes/app/mappers';
import type { StatusCodeServices } from '@status_codes/app/services';
import { type TStatusCodeAPI } from '@status_codes/domain/dto';
import { type TStatusCodeDOM } from '@status_codes/domain/entities';
import { type Context } from 'elysia';

export class StatusCodeController {
    private readonly services: StatusCodeServices;
    private readonly mappers: TMappers<TStatusCodeDOM, TStatusCodeAPI>;

    constructor(services: StatusCodeServices) {
        this.services = services;
        this.mappers = new StatusCodeMappers();
    }

    findAll = async (): Promise<ListResponse<TStatusCodeAPI>> => {
        try {
            const status = await this.services.findAll();

            return new ListResponse(
                status.map(this.mappers.domToApi),
                HttpSuccessCode.SUCCESSFUL,
            );
        } catch (e) {
            throw e;
        }
    };

    findOne = async ({
        params,
    }: Context<{
        params: Record<string, string>;
    }>): Promise<ApiReponse<TStatusCodeAPI>> => {
        try {
            const status = await this.services.findOne(params.id);

            return new ApiReponse(
                this.mappers.domToApi(status),
                HttpSuccessCode.SUCCESSFUL,
            );
        } catch (e) {
            throw e;
        }
    };

    createOne = async ({ body, set }: Context): Promise<ApiReponse<TStatusCodeAPI>> => {
        try {
            const status = await this.services.createOne(
                this.mappers.apiToDom(body as TStatusCodeAPI),
            );

            set.status = HttpSuccessCode.CREATED;
            return new ApiReponse(this.mappers.domToApi(status), HttpSuccessCode.CREATED);
        } catch (e) {
            throw e;
        }
    };

    createMany = async ({ body, set }: Context): Promise<ApiReponse<number>> => {
        try {
            const status = body as TStatusCodeAPI[];
            const count = await this.services.createMany(
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
        params,
    }: Context<{
        params: Record<string, string>;
    }>): Promise<ApiReponse<TStatusCodeAPI>> => {
        try {
            const statusBody = body as TStatusCodeAPI;
            if (!statusBody.id) statusBody.id = params.id;

            const status = await this.services.updateOne(
                this.mappers.apiToDom(statusBody),
            );

            return new ApiReponse(this.mappers.domToApi(status), HttpSuccessCode.CREATED);
        } catch (e) {
            throw e;
        }
    };

    deleteOne = async ({
        params,
        set,
    }: Context<{
        params: Record<string, string>;
    }>): Promise<void> => {
        try {
            await this.services.deleteOne(params.id);
            set.status = HttpSuccessCode.NOT_CONTENT;
        } catch (e) {
            throw e;
        }
    };
}
