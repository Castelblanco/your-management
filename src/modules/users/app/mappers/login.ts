import type { TMappers } from '@common/mappers_wrappers/mappers';
import {
    type TUserLoginAPI,
    type TUserPointSaleAPI,
    UserLoginAPI,
    UserPointSaleAPI,
} from '@users/domain/dto';
import {
    type TUserLoginDOM,
    type TUserPointSaleDOM,
    UserLoginDOM,
    UserPointSaleDOM,
} from '@users/domain/entities';

export class UsersLoginMappers implements TMappers<TUserLoginDOM, TUserLoginAPI> {
    apiToDom = (item: TUserLoginAPI): TUserLoginDOM => {
        let pointSale: TUserPointSaleDOM | undefined;

        if (item.point_sale) {
            pointSale = new UserPointSaleDOM({
                id: item.point_sale._id,
                name: item.point_sale.name,
                address: item.point_sale.address,
                budget: item.point_sale.budget,
                statusId: item.point_sale.status_id,
                cityId: item.point_sale.city_id,
                city: item.point_sale.city,
                status: item.point_sale.status,
            });
        }

        return new UserLoginDOM({
            id: item._id,
            firstName: item.first_name,
            lastName: item.last_name,
            documentId: item.document_id,
            email: item.email,
            phone: item.phone,
            address: item.address,
            role: item.role,
            token: item.token,
            pointSale,
        });
    };

    domToApi = (item: TUserLoginDOM): TUserLoginAPI => {
        let pointSale: TUserPointSaleAPI | undefined;

        if (item.pointSale) {
            pointSale = new UserPointSaleAPI({
                _id: item.pointSale.id,
                name: item.pointSale.name,
                address: item.pointSale.address,
                budget: item.pointSale.budget,
                status_id: item.pointSale.statusId,
                city_id: item.pointSale.cityId,
                city: item.pointSale.city || '',
                status: item.pointSale.status || '',
            });
        }

        return new UserLoginAPI({
            _id: item.id,
            first_name: item.firstName,
            last_name: item.lastName,
            document_id: item.documentId,
            email: item.email,
            phone: item.phone,
            address: item.address,
            role: item.role,
            token: item.token,
            point_sale: pointSale,
        });
    };
}
