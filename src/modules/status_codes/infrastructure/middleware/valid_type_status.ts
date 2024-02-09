import { ErrorBadRequest } from '@common/response/errors/bad_request';
import type { TStatusCodeType } from '@status_codes/domain/entities';
import type { Context } from 'elysia';

type TContext = Context<{
    params: Record<never, string>;
}>;

const validType: Record<TStatusCodeType, boolean> = {
    cities: true,
    department: true,
    point_sales: true,
    users: true,
    clients: true,
    guide_service: true,
};

const keyList = Object.keys(validType)
    .map((key) => key)
    .join(', ');

export const validTypeStatus = ({ query }: TContext): void => {
    if (!query.type) throw new ErrorBadRequest('query type is required');

    if (!validType[query.type as TStatusCodeType])
        throw new ErrorBadRequest(`query type is incorrect, this must be ${keyList}`);
};
