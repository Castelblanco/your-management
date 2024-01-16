import { HttpErrorCode } from '../../enums/errors_enum';
export class BaseError extends Error {
    code: number;
    status: number;
    error: string;
    metadata: unknown;

    constructor(message: string, code: number, status?: number, metadata?: unknown) {
        super(message || 'Default error');
        this.error = this.message;
        this.code = code;
        this.status = status || HttpErrorCode.INTERNAL_SERVER_ERROR;
        this.metadata = metadata;
    }
}
