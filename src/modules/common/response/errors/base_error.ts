import { HttpErrorCode } from '../../enums/errors_enum';
export class BaseError extends Error {
    code: number;
    status: number;
    error: string;
    metadata: any;

    constructor(
        message: string,
        code: number,
        status?: number,
        metadata?: any,
    ) {
        super(message || 'Default error');
        this.error = this.message;
        this.code = code || HttpErrorCode.UNDEFINED;
        this.status = status || HttpErrorCode.INTERNAL_SERVER_ERROR;
        this.metadata = metadata;
    }
}
