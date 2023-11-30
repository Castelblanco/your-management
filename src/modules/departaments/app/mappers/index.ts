import { TMappers } from '@common/mappers_wrappers/mappers';
import { DepartamentAPI, TDepartamentAPI } from '@departaments/domain/dto';
import { DepartamentDOM, TDepartamentDOM } from '@departaments/domain/entities';

export class DepartamentMappers
    implements TMappers<TDepartamentDOM, TDepartamentAPI>
{
    apiToDom = (item: TDepartamentAPI): TDepartamentDOM => {
        return new DepartamentDOM({
            id: item.id,
            name: item.name,
            statusId: item.status_id,
            status: item.status,
        });
    };

    domToApi = (item: TDepartamentDOM): TDepartamentAPI => {
        return new DepartamentAPI({
            id: item.id,
            name: item.name,
            status_id: item.statusId,
            status: item.status,
        });
    };
}
