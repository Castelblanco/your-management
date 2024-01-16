import type { TWrappers } from '@common/mappers_wrappers/wrappers';
import { StatusCodeDOM, type TStatusCodeDOM } from '@status_codes/domain/entities';
import { StatusCodeDAL, type TStatusCodeDAL } from '../models';

export class StatusCodeWrappers implements TWrappers<TStatusCodeDOM, TStatusCodeDAL> {
    dalToDom = (item: TStatusCodeDAL): TStatusCodeDOM => {
        return new StatusCodeDOM({
            id: item.id,
            name: item.name,
        });
    };

    domToDal = (item: TStatusCodeDOM): TStatusCodeDAL => {
        return new StatusCodeDAL({
            id: item.id,
            name: item.name,
        });
    };
}
