import type { TMappers } from '@common/mappers_wrappers/mappers';
import {
    DepartmentAPI,
    type TDepartmentStatusAPI,
    type TDepartmentAPI,
} from 'modules/departments/domain/dto';
import {
    DepartmentDOM,
    type TDepartmentStatusDOM,
    type TDepartmentDOM,
} from 'modules/departments/domain/entities';

export class DepartmentMappers implements TMappers<TDepartmentDOM, TDepartmentAPI> {
    apiToDom = (item: TDepartmentAPI): TDepartmentDOM => {
        let status: TDepartmentStatusDOM | undefined;

        if (item.status) {
            status = {
                id: item.status._id,
                name: item.status.name,
            };
        }

        return new DepartmentDOM({
            id: item._id,
            name: item.name,
            status,
        });
    };

    domToApi = (item: TDepartmentDOM): TDepartmentAPI => {
        let status: TDepartmentStatusAPI | undefined;

        if (item.status) {
            status = {
                _id: item.status.id,
                name: item.status.name,
            };
        }
        return new DepartmentAPI({
            _id: item.id,
            name: item.name,
            status,
        });
    };
}
