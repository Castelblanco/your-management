import { CityDOM, CityPointSaleDOM, type TCityDOM } from '@cities/domain/entities';
import type { TWrappers } from '@common/mappers_wrappers/wrappers';
import { CityDAL, CityPointSaleDAL, type TCityDAL } from '../models';

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

        return new CityDOM({
            id: item.id,
            name: item.name,
            status: item.status?.name || '',
            statusId: item.status_id,
            departmentId: item.department_id,
            department: item.department?.name || '',
            pointSales,
        });
    };

    domToDal = (item: TCityDOM): TCityDAL => {
        const pointSales = item.pointSales?.map((point) => {
            return new CityPointSaleDAL({
                id: point.id,
                address: point.address,
                budget: point.budget,
                name: point.name,
                status: undefined,
            });
        });

        return new CityDAL({
            id: item.id,
            name: item.name,
            status_id: item.statusId,
            department_id: item.departmentId,
            department: undefined,
            point_sales: pointSales,
        });
    };
}
