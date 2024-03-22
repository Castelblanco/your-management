import type { TMappers } from '@common/mappers_wrappers/mappers';
import type { UsersServices } from '@users/app/services';
import type { TUserAPI, TUserLoginAPI } from '@users/domain/dto';
import type { TUserDOM, TUserLoginDOM } from '@users/domain/entities';
import type { Context } from 'elysia';

import { HttpSuccessCode } from '@common/enums/success_enum';
import { ApiReponse } from '@common/response/success/api_responses';
import { ListResponse } from '@common/response/success/list_responses';
import { UsersLoginMappers, UsersMappers } from '@users/app/mappers';

type TContext = Context<{
    params: Record<string, string>;
}>;

export class UsersControllers {
    services: UsersServices;
    mappers: TMappers<TUserDOM, TUserAPI>;
    mappersLogin: TMappers<TUserLoginDOM, TUserLoginAPI>;

    constructor(services: UsersServices) {
        this.services = services;
        this.mappers = new UsersMappers();
        this.mappersLogin = new UsersLoginMappers();
    }

    login = async ({ body }: TContext): Promise<ApiReponse<TUserLoginAPI>> => {
        try {
            const login = await this.services.login(
                this.mappers.apiToDom(body as TUserAPI),
            );

            return new ApiReponse(
                this.mappersLogin.domToApi(login),
                HttpSuccessCode.SUCCESSFUL,
            );
        } catch (e) {
            throw e;
        }
    };

    findAll = async ({ query }: TContext): Promise<ListResponse<TUserAPI>> => {
        try {
            const users = await this.services.findAll(
                {
                    firstName: query.firstName,
                    lastName: query.lastName,
                    documentId: query.documentId,
                    email: query.email,
                    address: query.address,
                    pointSaleId: query.pointSaleId,
                    roleId: query.roleId,
                    startTime: query.startTime,
                    endTime: query.endTime,
                },
                {
                    limit: query.limit ? +query.limit : 50,
                    offset: query.offset ? +query.offset : 0,
                    pointSale: !!query.pointSale,
                    role: !!query.role,
                    status: !!query.status,
                },
            );

            return new ListResponse(
                users.map(this.mappers.domToApi),
                HttpSuccessCode.SUCCESSFUL,
            );
        } catch (e) {
            throw e;
        }
    };

    findOne = async ({ params, query }: TContext): Promise<ApiReponse<TUserAPI>> => {
        try {
            const user = await this.services.findOne(
                params.id,
                !!query.pointSale,
                !!query.role,
                !!query.status,
            );

            return new ApiReponse(
                this.mappers.domToApi(user),
                HttpSuccessCode.SUCCESSFUL,
            );
        } catch (e) {
            throw e;
        }
    };

    createOne = async ({ body, set }: TContext): Promise<ApiReponse<TUserAPI>> => {
        try {
            const newUser = await this.services.createOne(
                this.mappers.apiToDom(body as TUserAPI),
            );

            set.status = HttpSuccessCode.CREATED;
            return new ApiReponse(
                this.mappers.domToApi(newUser),
                HttpSuccessCode.CREATED,
            );
        } catch (e) {
            throw e;
        }
    };

    createMany = async ({ body, set }: TContext): Promise<ApiReponse<number>> => {
        try {
            const count = await this.services.createMany(
                (body as TUserAPI[]).map(this.mappers.apiToDom),
            );

            set.status = HttpSuccessCode.CREATED;
            return new ApiReponse(count, HttpSuccessCode.CREATED);
        } catch (e) {
            throw e;
        }
    };

    updateOne = async ({ body, params }: TContext): Promise<ApiReponse<TUserAPI>> => {
        try {
            const user = body as TUserAPI;
            if (!user._id) user._id = params.id;

            const updatetUser = await this.services.updateOne(
                this.mappers.apiToDom(body as TUserAPI),
            );

            return new ApiReponse(
                this.mappers.domToApi(updatetUser),
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
