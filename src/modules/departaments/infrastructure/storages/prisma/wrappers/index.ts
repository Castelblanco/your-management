import type { TWrappers } from '@common/mappers_wrappers/wrappers';
import { DepartamentDOM, type TDepartamentDOM } from '@departaments/domain/entities';
import { DepartamentDAL, type TDepartamentDAL } from '../models';

export class DepartamentWrappers implements TWrappers<TDepartamentDOM, TDepartamentDAL> {
    dalToDom = (item: TDepartamentDAL): TDepartamentDOM => {
        return new DepartamentDOM({
            id: item.id,
            name: item.name,
            statusId: item.status_id,
            status: item.status?.name,
        });
    };

    domToDal = (item: TDepartamentDOM): TDepartamentDAL => {
        return new DepartamentDAL({
            id: item.id,
            name: item.name,
            status_id: item.statusId,
        });
    };
}
