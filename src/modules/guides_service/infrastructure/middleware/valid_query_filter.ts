import { ErrorBadRequest } from '@common/response/errors/bad_request';
import { type Context } from 'elysia';

type TContext = Context<{
    params: Record<never, string>;
}>;

export const validQueryFilter = ({ query }: TContext) => {
    if (query.limit) {
        if (isNaN(+query.limit)) throw new ErrorBadRequest('query limit must be number');
    }

    if (query.offset) {
        if (isNaN(+query.offset))
            throw new ErrorBadRequest('query offset must be number');
    }

    if (!query.userId) throw new ErrorBadRequest('query userId is required');
};
