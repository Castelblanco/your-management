import { TWrappers } from '@common/mappers_wrappers/wrappers';
import {
    PointSaleDOM,
    PointSaleUserDOM,
    TPointSaleDOM,
} from '@point_sales/domain/entities';
import { PointSaleDAL, PointSaleUserDAL, TPointSaleDAL } from '../models';

export class pointSalesWrappers
    implements TWrappers<TPointSaleDOM, TPointSaleDAL>
{
    dalToDom = (item: TPointSaleDAL): TPointSaleDOM => {
        const users = item.users?.map(
            (user) =>
                new PointSaleUserDOM({
                    id: user.id,
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
            id: item.id,
            name: item.name,
            address: item.address,
            budget: item.budget,
            statusId: item.status_id,
            cityId: item.city_id,
            city: item.city,
            status: item.status,
            users,
        });
    };

    domToDal = (item: TPointSaleDOM): TPointSaleDAL => {
        const users = item.users?.map(
            (user) =>
                new PointSaleUserDAL({
                    id: user.id,
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

        return new PointSaleDAL({
            id: item.id,
            name: item.name,
            address: item.address,
            budget: item.budget,
            status_id: item.statusId,
            city_id: item.cityId,
            city: item.city,
            status: item.status,
            users,
        });
    };
}
