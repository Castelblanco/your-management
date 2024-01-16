import type { UserRolesServices } from '@user_roles/app/services';
import type { TUserRoleAPI } from '@user_roles/domain/dto';
import type { TUserRoleDOM } from '@user_roles/domain/entities';
import type { Context } from 'elysia';
import type { TMappers } from '@common/mappers_wrappers/mappers';

import { HttpSuccessCode } from '@common/enums/success_enum';
import { ApiReponse } from '@common/response/success/api_responses';
import { ListResponse } from '@common/response/success/list_responses';
import { UserRolesMappers } from '@user_roles/app/mappers';

export class UserRolesController {
    private readonly services: UserRolesServices;
    private readonly mappers: TMappers<TUserRoleDOM, TUserRoleAPI>;

    constructor(services: UserRolesServices) {
        this.services = services;
        this.mappers = new UserRolesMappers();
    }

    findAll = async (): Promise<ListResponse<TUserRoleAPI>> => {
        try {
            const roles = await this.services.findAll();

            return new ListResponse(
                roles.map(this.mappers.domToApi),
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
    }>): Promise<ApiReponse<TUserRoleAPI>> => {
        try {
            const role = await this.services.findOne(params.id);

            return new ApiReponse(
                this.mappers.domToApi(role),
                HttpSuccessCode.SUCCESSFUL,
            );
        } catch (e) {
            throw e;
        }
    };

    createOne = async ({ body, set }: Context): Promise<ApiReponse<TUserRoleAPI>> => {
        try {
            const newRole = await this.services.createOne(
                this.mappers.apiToDom(body as TUserRoleAPI),
            );

            set.status = HttpSuccessCode.CREATED;
            return new ApiReponse(
                this.mappers.domToApi(newRole),
                HttpSuccessCode.CREATED,
            );
        } catch (e) {
            throw e;
        }
    };

    createMany = async ({ body, set }: Context): Promise<ApiReponse<number>> => {
        try {
            const roles = body as TUserRoleAPI[];
            const count = await this.services.createMany(
                roles.map(this.mappers.apiToDom),
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
    }>): Promise<ApiReponse<TUserRoleAPI>> => {
        try {
            const roleBody = body as TUserRoleAPI;
            if (!roleBody.id) roleBody.id = params.id;

            const updateRole = await this.services.updateOne(
                this.mappers.apiToDom(roleBody),
            );

            return new ApiReponse(
                this.mappers.domToApi(updateRole),
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
