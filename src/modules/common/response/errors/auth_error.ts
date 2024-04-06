import { BaseError } from './base_error';
import { HttpErrorCode } from '../../enums/errors_enum';

export class ErrorAuth extends BaseError {
    constructor(message: string, metadata?: unknown) {
        super(`${message}`, HttpErrorCode.FORBIDDEN, HttpErrorCode.FORBIDDEN, metadata);
    }
}
