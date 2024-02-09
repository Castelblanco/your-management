import type { TMappers } from '@common/mappers_wrappers/mappers';
import {
    DepartamentAPI,
    type TDepartamentStatusAPI,
    type TDepartamentAPI,
} from '@departaments/domain/dto';
import {
    DepartamentDOM,
    type TDepartamentStatusDOM,
    type TDepartamentDOM,
} from '@departaments/domain/entities';

export class DepartamentMappers implements TMappers<TDepartamentDOM, TDepartamentAPI> {
    apiToDom = (item: TDepartamentAPI): TDepartamentDOM => {
        let status: TDepartamentStatusDOM | undefined;

        if (item.status) {
            status = {
                id: item.status._id,
                name: item.status.name,
            };
        }

        return new DepartamentDOM({
            id: item._id,
            name: item.name,
            status,
        });
    };

    domToApi = (item: TDepartamentDOM): TDepartamentAPI => {
        let status: TDepartamentStatusAPI | undefined;

        if (item.status) {
            status = {
                _id: item.status.id,
                name: item.status.name,
            };
        }
        return new DepartamentAPI({
            _id: item.id,
            name: item.name,
            status,
        });
    };
}
