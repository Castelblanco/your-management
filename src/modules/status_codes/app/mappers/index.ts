import { TMappers } from '@common/mappers_wrappers/mappers';
import { StatusCodeAPI, TStatusCodeAPI } from '@status_codes/domain/dto';
import { StatusCodeDOM, TStatusCodeDOM } from '@status_codes/domain/entities';

export class StatusCodeMappers
    implements TMappers<TStatusCodeDOM, TStatusCodeAPI>
{
    apiToDom = (item: TStatusCodeAPI): TStatusCodeDOM => {
        return new StatusCodeDOM({
            id: item.id,
            name: item.name,
        });
    };

    domToApi = (item: TStatusCodeDOM): TStatusCodeAPI => {
        return new StatusCodeAPI({
            id: item.id,
            name: item.name,
        });
    };
}
