import type { TWrappers } from '@common/mappers_wrappers/wrappers';
import {
    type TUserDOM,
    type TUserPointSaleDOM,
    UserDOM,
    UserPointSaleDOM,
    type TUserRoleDOM,
    type TUserStatusDOM,
    type TUserPointSaleCityDOM,
} from '@users/domain/entities';
import { type TUserDAL, UserDAL } from '../models';

export class UsersWrappers implements TWrappers<TUserDOM, TUserDAL> {
    dalToDom = (item: TUserDAL): TUserDOM => {
        let pointSale: TUserPointSaleDOM | undefined;

        if (item.point_sale) {
            const { point_sale: pointSaleDal } = item;
            let city: TUserPointSaleCityDOM | undefined;

            if (pointSaleDal.city) {
                const { department } = pointSaleDal.city;
                city = {
                    id: pointSaleDal.city.id,
                    name: pointSaleDal.city.name,
                    department: undefined,
                };

                if (department) {
                    city.department = {
                        id: department.id,
                        name: department.name,
                    };
                }
            }

            pointSale = new UserPointSaleDOM({
                id: item.point_sale.id,
                name: item.point_sale.name,
                address: item.point_sale.address,
                budget: item.point_sale.budget,
                city,
            });
        }

        let role: TUserRoleDOM | undefined;

        if (item.role) {
            role = {
                id: item.role.id,
                name: item.role.name,
            };
        }

        let status: TUserStatusDOM | undefined;

        if (item.status) {
            status = {
                id: item.status.id,
                name: item.status.name,
            };
        }

        return new UserDOM({
            id: item.id,
            firstName: item.first_name,
            lastName: item.last_name,
            documentId: item.document_id,
            email: item.email,
            password: item.password,
            phone: item.phone,
            address: item.address,
            role,
            status,
            pointSale,
            createdAt: item.created_at,
            updatedAt: item.updated_at,
        });
    };

    domToDal = (item: TUserDOM): TUserDAL => {
        return new UserDAL({
            id: item.id,
            first_name: item.firstName,
            last_name: item.lastName,
            document_id: item.documentId,
            email: item.email,
            password: item.password,
            phone: item.phone,
            point_sale_id: item.pointSale?.id || '',
            address: item.address,
            role_id: item.role?.id || '',
            status_id: item.status?.id || '',
            created_at: item.createdAt,
            updated_at: item.updatedAt,
        });
    };
}
