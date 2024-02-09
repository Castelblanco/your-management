import type { TMappers } from '@common/mappers_wrappers/mappers';
import {
    PointSaleAPI,
    PointSaleUserAPI,
    type TPointSaleAPI,
} from '@point_sales/domain/dto';
import {
    PointSaleDOM,
    PointSaleUserDOM,
    type TPointSaleDOM,
} from '@point_sales/domain/entities';

export class PointSalesMappers implements TMappers<TPointSaleDOM, TPointSaleAPI> {
    apiToDom = (item: TPointSaleAPI): TPointSaleDOM => {
        const users = item.users?.map(
            (user) =>
                new PointSaleUserDOM({
                    id: user._id,
                    firstName: user.first_name,
                    lastName: user.last_name,
                    documentId: user.document_id,
                    email: user.email,
                    phone: user.phone,
                    address: user.address,
                    roleId: user.role_id,
                    role: user.role,
                }),
        );

        return new PointSaleDOM({
            id: item._id,
            name: item.name,
            address: item.address,
            budget: item.budget,
            statusId: item.status_id,
            cityId: item.city_id,
            city: item.city,
            status: item.status,
            latitude: item.latitude,
            longitude: item.longitude,
            users,
        });
    };

    domToApi = (item: TPointSaleDOM): TPointSaleAPI => {
        const users = item.users?.map(
            (user) =>
                new PointSaleUserAPI({
                    _id: user.id,
                    first_name: user.firstName,
                    last_name: user.lastName,
                    document_id: user.documentId,
                    email: user.email,
                    phone: user.phone,
                    address: user.address,
                    role_id: user.roleId,
                    role: user.role,
                }),
        );

        return new PointSaleAPI({
            _id: item.id,
            name: item.name,
            address: item.address,
            budget: item.budget,
            status_id: item.statusId,
            city_id: item.cityId,
            city: item.city,
            status: item.status,
            latitude: item.latitude,
            longitude: item.longitude,
            users,
        });
    };
}
