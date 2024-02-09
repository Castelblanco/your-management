import type { TMappers } from '@common/mappers_wrappers/mappers';
import {
    type TUserAPI,
    type TUserPointSaleAPI,
    UserAPI,
    UserPointSaleAPI,
    type TUserRoleAPI,
    type TUserStatusAPI,
    type TUserPointSaleCityAPI,
} from '@users/domain/dto';
import {
    type TUserDOM,
    type TUserPointSaleDOM,
    UserDOM,
    UserPointSaleDOM,
    type TUserRoleDOM,
    type TUserStatusDOM,
    type TUserPointSaleCityDOM,
} from '@users/domain/entities';

export class UsersMappers implements TMappers<TUserDOM, TUserAPI> {
    apiToDom = (item: TUserAPI): TUserDOM => {
        let pointSale: TUserPointSaleDOM | undefined;

        if (item.point_sale) {
            const { point_sale: pointSaleApi } = item;
            let city: TUserPointSaleCityDOM | undefined;

            if (pointSaleApi.city) {
                const { department } = pointSaleApi.city;
                city = {
                    id: pointSaleApi.city._id,
                    name: pointSaleApi.city.name,
                    department: undefined,
                };

                if (department) {
                    city.department = {
                        id: department._id,
                        name: department.name,
                    };
                }
            }
            pointSale = new UserPointSaleDOM({
                id: item.point_sale._id,
                name: item.point_sale.name,
                address: item.point_sale.address,
                budget: item.point_sale.budget,
                city,
            });
        }

        let role: TUserRoleDOM | undefined;

        if (item.role) {
            role = {
                id: item.role._id,
                name: item.role.name,
            };
        }

        let status: TUserStatusDOM | undefined;

        if (item.status) {
            status = {
                id: item.status._id,
                name: item.status.name,
            };
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
            role,
            status,
            createdAt: item.created_at,
            updatedAt: item.updated_at,
            pointSale,
        });
    };

    domToApi = (item: TUserDOM): TUserAPI => {
        let pointSale: TUserPointSaleAPI | undefined;

        if (item.pointSale) {
            const { pointSale: pointSaleDom } = item;
            let city: TUserPointSaleCityAPI | undefined;

            if (pointSaleDom.city) {
                const { department } = pointSaleDom.city;
                city = {
                    _id: pointSaleDom.city.id,
                    name: pointSaleDom.city.name,
                    department: undefined,
                };

                if (department) {
                    city.department = {
                        _id: department.id,
                        name: department.name,
                    };
                }
            }

            pointSale = new UserPointSaleAPI({
                _id: item.pointSale.id,
                name: item.pointSale.name,
                address: item.pointSale.address,
                budget: item.pointSale.budget,
                city,
            });
        }

        let role: TUserRoleAPI | undefined;

        if (item.role) {
            role = {
                _id: item.role.id,
                name: item.role.name,
            };
        }

        let status: TUserStatusAPI | undefined;

        if (item.status) {
            status = {
                _id: item.status.id,
                name: item.status.name,
            };
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
            role,
            status,
            created_at: item.createdAt,
            updated_at: item.updatedAt,
            point_sale: pointSale,
        });
    };
}
