import { TMappers } from '@common/mappers_wrappers/mappers';
import { StatusCodeApi, TStatusCodeApi } from '@status_codes/domain/dto';
import { StatusCodeDOM, TStatusCodeDOM } from '@status_codes/domain/entities';

export class StatusCodeMappers
    implements TMappers<TStatusCodeDOM, TStatusCodeApi>
{
    apiToDom = (item: TStatusCodeApi): TStatusCodeDOM => {
        return new StatusCodeDOM({
            id: item.id,
            name: item.name,
        });
    };

    domToApi = (item: TStatusCodeDOM): TStatusCodeApi => {
        return new StatusCodeApi({
            id: item.id,
            name: item.name,
        });
    };
}
