import { BaseError } from './base_error';
import { HttpErrorCode } from '../../enums/errors_enum';

export class ErrorResourceNotFound extends BaseError {
    constructor(message: string, metadata?: unknown) {
        super(
            message,
            HttpErrorCode.RESOURCE_NOT_FOUND,
            HttpErrorCode.RESOURCE_NOT_FOUND,
            metadata,
        );
    }
}
