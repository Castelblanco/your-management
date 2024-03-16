import { type Point_Sales } from '@prisma/client';

export type TPointSaleDAL = Point_Sales & {
    status?: TPointSaleStatusDAL;
    users?: TPointSaleUserDAL[];
};

export type TPointSaleStatusDAL = {
    id: string;
    name: string;
};

export type TPointSaleUserDAL = {
    id: string;
    first_name: string;
    last_name: string;
    document_id: string;
    email: string;
    phone: string;
    address: string;
    role: TPointSaleUserRoleDAL;
};

export type TPointSaleUserRoleDAL = {
    id: string;
    name: string;
};

export class PointSaleDAL implements TPointSaleDAL {
    id: string;
    name: string;
    address: string;
    budget: number;
    department: string;
    municipality: string;
    neighborhood: string;
    status_id: string;
    status?: TPointSaleStatusDAL;
    latitude: number;
    longitude: number;
    users?: TPointSaleUserDAL[];

    constructor(pointSale: TPointSaleDAL) {
        this.id = pointSale.id;
        this.name = pointSale.name;
        this.address = pointSale.address;
        this.budget = pointSale.budget;
        this.status_id = pointSale.status_id;
        this.department = pointSale.department;
        this.municipality = pointSale.municipality;
        this.neighborhood = pointSale.neighborhood;
        this.status = pointSale.status;
        this.users = pointSale.users;
        this.latitude = pointSale.latitude;
        this.longitude = pointSale.longitude;
    }
}

export class PointSaleUserDAL implements TPointSaleUserDAL {
    id: string;
    first_name: string;
    last_name: string;
    document_id: string;
    email: string;
    phone: string;
    address: string;
    role: TPointSaleUserRoleDAL;

    constructor(user: TPointSaleUserDAL) {
        this.id = user.id;
        this.first_name = user.first_name;
        this.last_name = user.last_name;
        this.document_id = user.document_id;
        this.email = user.email;
        this.phone = user.phone;
        this.address = user.address;
        this.role = user.role;
    }
}
