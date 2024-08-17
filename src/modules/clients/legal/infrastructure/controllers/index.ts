import { LegalClientMappers } from '@clients_legal/app/mappers';
import type { LegalClientServices } from '@clients_legal/app/services';
import type { TLegalClientAPI } from '@clients_legal/domain/dto';
import type { TLegalClientDOM } from '@clients_legal/domain/entities';
import { HttpSuccessCode } from '@common/enums/success_enum';
import type { TMappers } from '@common/mappers_wrappers/mappers';
import { ApiReponse } from '@common/response/success/api_responses';
import { ListResponse } from '@common/response/success/list_responses';
import type { Context } from 'elysia';

type TContext = Context<{
    params: Record<string, string>;
    query: Record<string, string | undefined>;
}>;

export class LegalClientControllers {
    services: LegalClientServices;
    mappers: TMappers<TLegalClientDOM, TLegalClientAPI>;

    constructor(services: LegalClientServices) {
        this.services = services;
        this.mappers = new LegalClientMappers();
    }

    findAll = async ({ query }: TContext): Promise<ListResponse<TLegalClientAPI>> => {
        try {
            const qr = {
                limit: query.limit ? +query.limit : 50,
                offset: query.offset ? +query.offset : 0,
                status: !!query.status,
                numberMovil: query.numberMovil,
                address: query.address,
                nit: query.nit,
                businessName: query.businessName,
                statusId: query.statusId,
            };
            const [clients, count] = await Promise.all([
                this.services.findAll(qr),
                this.services.count(qr),
            ]);

            return new ListResponse(
                clients.map(this.mappers.domToApi),
                count,
                HttpSuccessCode.SUCCESSFUL,
            );
        } catch (e) {
            throw e;
        }
    };

    findOne = async ({ params }: TContext): Promise<ApiReponse<TLegalClientAPI>> => {
        try {
            const client = await this.services.findOne(params.id);

            return new ApiReponse(
                this.mappers.domToApi(client),
                HttpSuccessCode.SUCCESSFUL,
            );
        } catch (e) {
            throw e;
        }
    };

    createOne = async ({ body, set }: TContext): Promise<ApiReponse<TLegalClientAPI>> => {
        try {
            const client = await this.services.createOne(
                this.mappers.apiToDom(body as TLegalClientAPI),
            );

            set.status = HttpSuccessCode.CREATED;

            return new ApiReponse(this.mappers.domToApi(client), HttpSuccessCode.CREATED);
        } catch (e) {
            throw e;
        }
    };

    createMany = async ({ body, set }: TContext): Promise<ApiReponse<number>> => {
        try {
            const count = await this.services.createMany(
                (body as TLegalClientAPI[]).map(this.mappers.apiToDom),
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
    }: TContext): Promise<ApiReponse<TLegalClientAPI>> => {
        try {
            const client = body as TLegalClientAPI;

            if (!client._id) client._id = params.id;

            const updateClient = await this.services.updateOne(
                this.mappers.apiToDom(client),
            );

            return new ApiReponse(
                this.mappers.domToApi(updateClient),
                HttpSuccessCode.SUCCESSFUL,
            );
        } catch (e) {
            throw e;
        }
    };

    deleteOne = async ({ params }: TContext): Promise<void> => {
        try {
            await this.services.deleteOne(params.id);
        } catch (e) {
            throw e;
        }
    };
}
