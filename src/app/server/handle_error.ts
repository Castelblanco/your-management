import { ApiError } from '@common/response/errors/api_error';
import { ErrorHandler } from 'elysia';

export const handleError: ErrorHandler = ({ error, set }) => {
    const err = new ApiError(error);
    set.status = err.code;
    return err;
};
