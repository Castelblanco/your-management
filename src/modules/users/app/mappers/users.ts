import type { TMappers } from '@common/mappers_wrappers/mappers';
import {
    type TUserAPI,
    type TUserPointSaleAPI,
    UserAPI,
    UserPointSaleAPI,
    type TUserRoleAPI,
    type TUserStatusAPI,
    UserPictureAPI,
    type TUserPictureAPI,
} from '@users/domain/dto';
import {
    type TUserDOM,
    type TUserPointSaleDOM,
    UserDOM,
    UserPointSaleDOM,
    type TUserRoleDOM,
    type TUserStatusDOM,
    UserPictureDOM,
    type TUserPictureDOM,
} from '@users/domain/entities';

export type TUserMappersOpts = {
    password: boolean;
};

export class UsersMappers implements TMappers<TUserDOM, TUserAPI, TUserMappersOpts> {
    apiToDom = (item: TUserAPI): TUserDOM => {
        let pointSale: TUserPointSaleDOM | undefined;

        if (item.point_sale) {
            const { point_sale: pointSaleApi } = item;
            pointSale = new UserPointSaleDOM({
                id: pointSaleApi._id,
                name: pointSaleApi.name,
                address: pointSaleApi.address,
                budget: pointSaleApi.budget,
                department: pointSaleApi.department,
                latitude: pointSaleApi.latitude,
                longitude: pointSaleApi.longitude,
                municipality: pointSaleApi.municipality,
                neighborhood: pointSaleApi.neighborhood,
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

        let picture: TUserPictureDOM | undefined;

        if (item.picture) {
            picture = new UserPictureDOM({
                id: item.picture._id,
                url: item.picture.url,
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
            role,
            picture,
            status,
            createdAt: item.created_at,
            updatedAt: item.updated_at,
            pointSale,
        });
    };

    domToApi = (item: TUserDOM, opts?: TUserMappersOpts): TUserAPI => {
        let pointSale: TUserPointSaleAPI | undefined;

        if (item.pointSale) {
            const { pointSale: pointSaleDom } = item;

            pointSale = new UserPointSaleAPI({
                _id: pointSaleDom.id,
                name: pointSaleDom.name,
                address: pointSaleDom.address,
                budget: pointSaleDom.budget,
                department: pointSaleDom.department,
                latitude: pointSaleDom.latitude,
                longitude: pointSaleDom.longitude,
                municipality: pointSaleDom.municipality,
                neighborhood: pointSaleDom.neighborhood,
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

        let picture: TUserPictureAPI | undefined;

        if (item.picture) {
            picture = new UserPictureAPI({
                _id: item.picture.id,
                url: item.picture.url,
            });
        }

        return new UserAPI({
            _id: item.id,
            first_name: item.firstName,
            last_name: item.lastName,
            document_id: item.documentId,
            email: item.email,
            password: opts?.password ? item.password : (undefined as unknown as string),
            phone: item.phone,
            address: item.address,
            picture,
            role,
            status,
            created_at: item.createdAt,
            updated_at: item.updatedAt,
            point_sale: pointSale,
        });
    };
}
