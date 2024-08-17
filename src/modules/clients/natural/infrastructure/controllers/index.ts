import { NaturalClientMappers } from '@clients_natural/app/mappers';
import { type NaturalClientServices } from '@clients_natural/app/services';
import { type TNaturalClientAPI } from '@clients_natural/domain/dto';
import { type TNaturalClientDOM } from '@clients_natural/domain/entities';
import { HttpSuccessCode } from '@common/enums/success_enum';
import { type TMappers } from '@common/mappers_wrappers/mappers';
import { ApiReponse } from '@common/response/success/api_responses';
import { ListResponse } from '@common/response/success/list_responses';
import { type Context } from 'elysia';

type TContext = Context<{
    params: Record<string, string>;
}>;

export class NaturalClientControllers {
    services: NaturalClientServices;
    mappers: TMappers<TNaturalClientDOM, TNaturalClientAPI>;

    constructor(service: NaturalClientServices) {
        this.services = service;
        this.mappers = new NaturalClientMappers();
    }

    findAll = async ({ query }: TContext): Promise<ListResponse<TNaturalClientAPI>> => {
        try {
            const qr = {
                limit: query.limit ? +query.limit : 50,
                offset: query.offset ? +query.offset : 0,
                status: !!query.status,
                address: query.address,
                documentId: query.documentId,
                firstName: query.firstName,
                lastName: query.lastName,
                numberMovil: query.numberMovil,
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

    findOne = async ({ params }: TContext): Promise<ApiReponse<TNaturalClientAPI>> => {
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

    createOne = async ({
        body,
        set,
    }: TContext): Promise<ApiReponse<TNaturalClientAPI>> => {
        try {
            const client = await this.services.createOne(
                this.mappers.apiToDom(body as TNaturalClientAPI),
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
                (body as TNaturalClientAPI[]).map(this.mappers.apiToDom),
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
    }: TContext): Promise<ApiReponse<TNaturalClientAPI>> => {
        try {
            const client = body as TNaturalClientAPI;

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

    deleteOne = async ({ params, set }: TContext): Promise<void> => {
        try {
            await this.services.deleteOne(params.id);

            set.status = HttpSuccessCode.NOT_CONTENT;
        } catch (e) {
            throw e;
        }
    };
}
