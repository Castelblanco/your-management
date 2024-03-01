import type { TMappers } from '@common/mappers_wrappers/mappers';
import type { DepartmentsServices } from 'modules/departments/app/services';
import type { TDepartmentAPI } from 'modules/departments/domain/dto';
import type { TDepartmentDOM } from 'modules/departments/domain/entities';
import type { Context } from 'elysia';

import { HttpSuccessCode } from '@common/enums/success_enum';
import { ApiReponse } from '@common/response/success/api_responses';
import { ListResponse } from '@common/response/success/list_responses';
import { DepartmentMappers } from 'modules/departments/app/mappers';

export class DepartmentsController {
    private readonly services: DepartmentsServices;
    private readonly mappers: TMappers<TDepartmentDOM, TDepartmentAPI>;

    constructor(services: DepartmentsServices) {
        this.services = services;
        this.mappers = new DepartmentMappers();
    }

    findAll = async ({ query }: Context): Promise<ListResponse<TDepartmentAPI>> => {
        try {
            const departments = await this.services.findAll(
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
                departments.map(this.mappers.domToApi),
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
    }>): Promise<ApiReponse<TDepartmentAPI>> => {
        try {
            const department = await this.services.findOne(params.id);

            return new ApiReponse(
                this.mappers.domToApi(department),
                HttpSuccessCode.SUCCESSFUL,
            );
        } catch (e) {
            throw e;
        }
    };

    createOne = async ({ body, set }: Context): Promise<ApiReponse<TDepartmentAPI>> => {
        try {
            const newDepartment = await this.services.createOne(
                this.mappers.apiToDom(body as TDepartmentAPI),
            );

            set.status = HttpSuccessCode.CREATED;
            return new ApiReponse(
                this.mappers.domToApi(newDepartment),
                HttpSuccessCode.CREATED,
            );
        } catch (e) {
            throw e;
        }
    };

    createMany = async ({ body, set }: Context): Promise<ApiReponse<number>> => {
        try {
            const department = body as TDepartmentAPI[];
            const count = await this.services.createMany(
                department.map(this.mappers.apiToDom),
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
    }>): Promise<ApiReponse<TDepartmentAPI>> => {
        try {
            const departmentBody = body as TDepartmentAPI;
            if (!departmentBody.id) departmentBody.id = params.id;

            const updateDepartment = await this.services.updateOne(
                this.mappers.apiToDom(departmentBody),
            );

            return new ApiReponse(
                this.mappers.domToApi(updateDepartment),
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
