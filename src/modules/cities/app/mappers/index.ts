import { CityAPI, CityPointSaleAPI, TCityAPI } from '@cities/domain/dto';
import { CityDOM, CityPointSaleDOM, TCityDOM } from '@cities/domain/entities';
import { TMappers } from '@common/mappers_wrappers/mappers';

export class CitiesMappers implements TMappers<TCityDOM, TCityAPI> {
    apiToDom = (item: TCityAPI): TCityDOM => {
        const pointSales = item.point_sales?.map((point) => {
            return new CityPointSaleDOM({
                id: point._id,
                address: point.address,
                budget: point.budget,
                name: point.name,
                status: point.status,
            });
        });

        return new CityDOM({
            id: item._id,
            name: item.name,
            status: item.status,
            statusId: item.status_id,
            departmentId: item.department_id,
            department: item.department,
            pointSales,
        });
    };

    domToApi = (item: TCityDOM): TCityAPI => {
        const pointSales = item.pointSales?.map((point) => {
            return new CityPointSaleAPI({
                _id: point.id,
                address: point.address,
                budget: point.budget,
                name: point.name,
                status: point.status,
            });
        });

        return new CityAPI({
            _id: item.id,
            name: item.name,
            status: item.status,
            status_id: item.statusId,
            department_id: item.departmentId,
            department: item.department,
            point_sales: pointSales,
        });
    };
}
