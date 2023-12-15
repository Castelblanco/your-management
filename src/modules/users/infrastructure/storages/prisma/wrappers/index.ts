import { TWrappers } from '@common/mappers_wrappers/wrappers';
import {
    TUserDOM,
    TUserPointSaleDOM,
    UserDOM,
    UserPointSaleDOM,
} from '@users/domain/entities';
import {
    TUserDAL,
    TUserPointSaleDAL,
    UserDAL,
    UserPointSaleDAL,
} from '../models';

export class UsersWrappers implements TWrappers<TUserDOM, TUserDAL> {
    dalToDom = (item: TUserDAL): TUserDOM => {
        let pointSale: TUserPointSaleDOM | undefined;

        if (item.point_sale) {
            pointSale = new UserPointSaleDOM({
                id: item.point_sale.id,
                name: item.point_sale.name,
                address: item.point_sale.address,
                budget: item.point_sale.budget,
                statusId: item.point_sale.status_id,
                cityId: item.point_sale.city_id,
                city: item.point_sale.city?.name,
                status: item.point_sale.status?.name,
            });
        }

        return new UserDOM({
            id: item.id,
            firstName: item.first_name,
            lastName: item.last_name,
            documentId: item.document_id,
            email: item.email,
            phone: item.phone,
            address: item.address,
            pointSaleId: item.point_sale_id,
            roleId: item.role_id,
            role: item.role?.name,
            createdAt: item.created_at,
            updatedAt: item.updated_at,
            pointSale,
        });
    };
    domToDal = (item: TUserDOM): TUserDAL => {
        let pointSale: TUserPointSaleDAL | undefined;

        if (item.pointSale) {
            pointSale = new UserPointSaleDAL({
                id: item.pointSale.id,
                name: item.pointSale.name,
                address: item.pointSale.address,
                budget: item.pointSale.budget,
                status_id: item.pointSale.statusId,
                city_id: item.pointSale.cityId,
                city: undefined,
                status: undefined,
            });
        }

        return new UserDAL({
            id: item.id,
            first_name: item.firstName,
            last_name: item.lastName,
            document_id: item.documentId,
            email: item.email,
            phone: item.phone,
            point_sale_id: item.pointSaleId,
            address: item.address,
            role_id: item.roleId,
            role: undefined,
            created_at: item.createdAt,
            updated_at: item.updatedAt,
            point_sale: pointSale,
        });
    };
}
