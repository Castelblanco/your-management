import type { TWrappers } from '@common/mappers_wrappers/wrappers';
import { DepartmentDOM, type TDepartmentDOM } from 'modules/departments/domain/entities';
import { DepartmentDAL, type TDepartmentDAL } from '../models';

export class DepartmentWrappers implements TWrappers<TDepartmentDOM, TDepartmentDAL> {
    dalToDom = (item: TDepartmentDAL): TDepartmentDOM => {
        return new DepartmentDOM(item);
    };

    domToDal = (item: TDepartmentDOM): TDepartmentDAL => {
        return new DepartmentDAL({
            id: item.id,
            name: item.name,
            status_id: item.status?.id || '',
            status: undefined,
        });
    };
}
