import type { TMappers } from '@common/mappers_wrappers/mappers';
import type { DepartamentsServices } from '@departaments/app/services';
import type { TDepartamentAPI } from '@departaments/domain/dto';
import type { TDepartamentDOM } from '@departaments/domain/entities';
import type { Context } from 'elysia';

import { HttpSuccessCode } from '@common/enums/success_enum';
import { ApiReponse } from '@common/response/success/api_responses';
import { ListResponse } from '@common/response/success/list_responses';
import { DepartamentMappers } from '@departaments/app/mappers';

export class DepartamentsController {
    private readonly services: DepartamentsServices;
    private readonly mappers: TMappers<TDepartamentDOM, TDepartamentAPI>;

    constructor(services: DepartamentsServices) {
        this.services = services;
        this.mappers = new DepartamentMappers();
    }

    findAll = async ({ query }: Context): Promise<ListResponse<TDepartamentAPI>> => {
        try {
            const departaments = await this.services.findAll(
                {
                    name: query.name || undefined,
                    statusId: query.statusId || undefined,
                },
                {
                    limit: query.limit ? +query.limit : 50,
                    offset: query.offset ? +query.offset : 0,
                },
            );

            return new ListResponse(
                departaments.map(this.mappers.domToApi),
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
    }>): Promise<ApiReponse<TDepartamentAPI>> => {
        try {
            const departament = await this.services.findOne(params.id);

            return new ApiReponse(
                this.mappers.domToApi(departament),
                HttpSuccessCode.SUCCESSFUL,
            );
        } catch (e) {
            throw e;
        }
    };

    createOne = async ({ body, set }: Context): Promise<ApiReponse<TDepartamentAPI>> => {
        try {
            const newDepartament = await this.services.createOne(
                this.mappers.apiToDom(body as TDepartamentAPI),
            );

            set.status = HttpSuccessCode.CREATED;
            return new ApiReponse(
                this.mappers.domToApi(newDepartament),
                HttpSuccessCode.CREATED,
            );
        } catch (e) {
            throw e;
        }
    };

    createMany = async ({ body, set }: Context): Promise<ApiReponse<number>> => {
        try {
            const departament = body as TDepartamentAPI[];
            const count = await this.services.createMany(
                departament.map(this.mappers.apiToDom),
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
    }>): Promise<ApiReponse<TDepartamentAPI>> => {
        try {
            const departamentBody = body as TDepartamentAPI;
            if (!departamentBody.id) departamentBody.id = params.id;

            const updateDepartament = await this.services.updateOne(
                this.mappers.apiToDom(departamentBody),
            );

            return new ApiReponse(
                this.mappers.domToApi(updateDepartament),
                HttpSuccessCode.CREATED,
            );
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
