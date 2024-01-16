import { HttpErrorCode } from '../../enums/errors_enum';
import { BaseError } from './base_error';
export class StorageError extends BaseError {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    constructor(metatada?: any) {
        super(
            'Storage error',
            // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
            metatada.code || HttpErrorCode.INTERNAL_SERVER_ERROR,
            // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
            metatada.status || HttpErrorCode.BAD_REQUEST,
            metatada,
        );
    }
}
