import type { TWrappers } from '@common/mappers_wrappers/wrappers';
import {
    PointSaleDOM,
    PointSaleUserDOM,
    type TPointSaleStatusDOM,
    type TPointSaleDOM,
} from 'modules/points_sale/domain/entities';
import { PointSaleDAL, PointSaleUserDAL, type TPointSaleDAL } from '../models';

export class PointsSaleWrappers implements TWrappers<TPointSaleDOM, TPointSaleDAL> {
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
                    role: user.role,
                }),
        );

        let status: TPointSaleStatusDOM | undefined;

        if (item.status) {
            status = item.status;
        }

        return new PointSaleDOM({
            id: item.id,
            name: item.name,
            address: item.address,
            budget: item.budget,
            department: item.department,
            municipality: item.municipality,
            neighborhood: item.neighborhood,
            latitude: item.latitude,
            longitude: item.longitude,
            status,
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
                    role: user.role,
                }),
        );

        return new PointSaleDAL({
            id: item.id,
            name: item.name,
            address: item.address,
            budget: item.budget,
            status_id: item.status?.id || '',
            department: item.department,
            municipality: item.municipality,
            neighborhood: item.neighborhood,
            status: item.status,
            latitude: item.latitude,
            longitude: item.longitude,
            users,
        });
    };
}
