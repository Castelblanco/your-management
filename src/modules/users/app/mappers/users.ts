import { TMappers } from '@common/mappers_wrappers/mappers';
import {
    TUserAPI,
    TUserPointSaleAPI,
    UserAPI,
    UserPointSaleAPI,
} from '@users/domain/dto';
import {
    TUserDOM,
    TUserPointSaleDOM,
    UserDOM,
    UserPointSaleDOM,
} from '@users/domain/entities';

export class UsersMappers implements TMappers<TUserDOM, TUserAPI> {
    apiToDom = (item: TUserAPI): TUserDOM => {
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

        return new UserDOM({
            id: item._id,
            firstName: item.first_name,
            lastName: item.last_name,
            documentId: item.document_id,
            email: item.email,
            password: item.password,
            phone: item.phone,
            address: item.address,
            pointSaleId: item.point_sale_id,
            roleId: item.role_id,
            role: item.role,
            createdAt: item.created_at,
            updatedAt: item.updated_at,
            pointSale,
        });
    };
    domToApi = (item: TUserDOM): TUserAPI => {
        let pointSale: TUserPointSaleAPI | undefined;

        if (item.pointSale) {
            pointSale = new UserPointSaleAPI({
                _id: item.pointSale.id,
                name: item.pointSale.name,
                address: item.pointSale.address,
                budget: item.pointSale.budget,
                status_id: item.pointSale.statusId,
                city_id: item.pointSale.cityId,
                city: item.pointSale.city!,
                status: item.pointSale.status!,
            });
        }

        return new UserAPI({
            _id: item.id,
            first_name: item.firstName,
            last_name: item.lastName,
            document_id: item.documentId,
            email: item.email,
            password: item.password,
            phone: item.phone,
            address: item.address,
            point_sale_id: item.pointSaleId,
            role_id: item.roleId,
            role: item.role,
            created_at: item.createdAt,
            updated_at: item.updatedAt,
            point_sale: pointSale,
        });
    };
}
