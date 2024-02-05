import type { TMappers } from '@common/mappers_wrappers/mappers';
import { StatusCodeAPI, type TStatusCodeAPI } from '@status_codes/domain/dto';
import { StatusCodeDOM, type TStatusCodeDOM } from '@status_codes/domain/entities';

export class StatusCodeMappers implements TMappers<TStatusCodeDOM, TStatusCodeAPI> {
    apiToDom = (item: TStatusCodeAPI): TStatusCodeDOM => {
        return new StatusCodeDOM({
            id: item._id,
            name: item.name,
        });
    };

    domToApi = (item: TStatusCodeDOM): TStatusCodeAPI => {
        return new StatusCodeAPI({
            _id: item.id,
            name: item.name,
        });
    };
}
