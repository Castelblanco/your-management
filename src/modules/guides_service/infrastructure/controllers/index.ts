import { HttpSuccessCode } from '@common/enums/success_enum';
import { type TMappers } from '@common/mappers_wrappers/mappers';
import { ApiReponse } from '@common/response/success/api_responses';
import { ListResponse } from '@common/response/success/list_responses';
import { GuideServiceMappers } from '@guides_service/app/mappers';
import { type GuideServiceServices } from '@guides_service/app/services';
import { type TGuideServiceAPI } from '@guides_service/domain/dto';
import { type TGuideServiceDOM } from '@guides_service/domain/entities';
import { type Context } from 'elysia';

type TContext = Context<{
    params: Record<string, string>;
}>;

export class GuideServiceControllers {
    service: GuideServiceServices;
    mappers: TMappers<TGuideServiceDOM, TGuideServiceAPI>;

    constructor(service: GuideServiceServices) {
        this.service = service;
        this.mappers = new GuideServiceMappers();
    }

    findAll = async ({ query }: TContext): Promise<ListResponse<TGuideServiceAPI>> => {
        try {
            const guides = await this.service.findAll(
                {
                    userId: query.userId || '',
                },
                {
                    limit: query.limit ? +query.limit : 50,
                    offset: query.offset ? +query.offset : 0,
                    status: !!query.status,
                    novelty: !!query.novelty,
                    collection: !!query.collection,
                    service: !!query.service,
                    user: !!query.user,
                    pointSaleOrigin: !!query.pointSaleOrigin,
                    pointSaleDestination: !!query.pointSaleDestination,
                    clientOrigin: !!query.clientOrigin,
                    clientDestination: !!query.clientDestination,
                },
            );

            return new ListResponse(
                guides.map(this.mappers.domToApi),
                HttpSuccessCode.SUCCESSFUL,
            );
        } catch (e) {
            throw e;
        }
    };

    findOne = async ({
        params,
        query,
    }: TContext): Promise<ApiReponse<TGuideServiceAPI>> => {
        try {
            const guide = await this.service.findOne(params.id, {
                status: !!query.status,
                novelty: !!query.novelty,
                collection: !!query.collection,
                service: !!query.service,
                user: !!query.user,
                pointSaleOrigin: !!query.pointSaleOrigin,
                pointSaleDestination: !!query.pointSaleDestination,
            });

            return new ApiReponse(
                this.mappers.domToApi(guide),
                HttpSuccessCode.SUCCESSFUL,
            );
        } catch (e) {
            throw e;
        }
    };

    createOne = async ({
        body,
        set,
    }: TContext): Promise<ApiReponse<TGuideServiceAPI>> => {
        try {
            const guide = await this.service.createOne(
                this.mappers.apiToDom(body as TGuideServiceAPI),
            );

            set.status = HttpSuccessCode.CREATED;
            return new ApiReponse(this.mappers.domToApi(guide), HttpSuccessCode.CREATED);
        } catch (e) {
            throw e;
        }
    };

    createMany = async ({ body, set }: TContext): Promise<ApiReponse<number>> => {
        try {
            const guide = await this.service.createMany(
                (body as TGuideServiceAPI[]).map(this.mappers.apiToDom),
            );
            set.status = HttpSuccessCode.CREATED;
            return new ApiReponse(guide, HttpSuccessCode.CREATED);
        } catch (e) {
            throw e;
        }
    };

    updateOne = async ({
        body,
        params,
    }: TContext): Promise<ApiReponse<TGuideServiceAPI>> => {
        try {
            const guide = body as TGuideServiceAPI;

            if (!guide._id) guide._id = params.id;
            const updateGuide = await this.service.updateOne(
                this.mappers.apiToDom(guide),
            );

            return new ApiReponse(
                this.mappers.domToApi(updateGuide),
                HttpSuccessCode.SUCCESSFUL,
            );
        } catch (e) {
            throw e;
        }
    };

    deleteOne = async ({ set, params }: TContext): Promise<void> => {
        try {
            await this.service.deleteOne(params.id);

            set.status = HttpSuccessCode.NOT_CONTENT;
        } catch (e) {
            throw e;
        }
    };
}
