import {
    CityDOM,
    CityPointSaleDOM,
    type TCityStatusDOM,
    type TCityDOM,
    type TCityDepartmentDOM,
} from '@cities/domain/entities';
import type { TWrappers } from '@common/mappers_wrappers/wrappers';
import { CityDAL, type TCityDAL } from '../models';

export class CitiesWrappers implements TWrappers<TCityDOM, TCityDAL> {
    dalToDom = (item: TCityDAL): TCityDOM => {
        const pointSales = item.point_sales?.map((point) => {
            return new CityPointSaleDOM({
                id: point.id,
                address: point.address,
                budget: point.budget,
                name: point.name,
                status: point.status?.name || '',
            });
        });

        let status: TCityStatusDOM | undefined;
        let department: TCityDepartmentDOM | undefined;

        if (item.status) {
            status = item.status;
        }

        if (item.department) {
            department = item.department;
        }

        return new CityDOM({
            id: item.id,
            name: item.name,
            status,
            department,
            pointSales,
        });
    };

    domToDal = (item: TCityDOM): TCityDAL => {
        return new CityDAL({
            id: item.id,
            name: item.name,
            status_id: item.status?.id || '',
            department_id: item.department?.id || '',
            point_sales: undefined,
            department: undefined,
            status: undefined,
        });
    };
}
