import type { Users_Roles, Users, Users_Status } from '@prisma/client';

export type TUserDAL = Users & {
    status?: TUserStatusDAL;
    role?: TUserRoleDAL;
    point_sale?: TUserPointSaleDAL;
};

export type TUserRoleDAL = Users_Roles;
export type TUserStatusDAL = Users_Status;

export type TUserPointSaleDAL = {
    id: string;
    name: string;
    address: string;
    department: string;
    municipality: string;
    neighborhood: string;
    latitude: number;
    longitude: number;
    budget: number;
};

export class UserDAL implements TUserDAL {
    id: string;
    first_name: string;
    last_name: string;
    document_id: string;
    email: string;
    password: string;
    phone: string;
    address: string;
    role_id: string;
    role?: TUserRoleDAL;
    point_sale_id: string;
    point_sale?: TUserPointSaleDAL;
    status_id: string;
    status?: TUserStatusDAL | undefined;
    created_at: Date;
    updated_at: Date;

    constructor(user: TUserDAL) {
        this.id = user.id;
        this.first_name = user.first_name;
        this.last_name = user.last_name;
        this.document_id = user.document_id;
        this.email = user.email;
        this.password = user.password;
        this.phone = user.phone;
        this.address = user.address;
        this.point_sale_id = user.point_sale_id;
        this.point_sale = user.point_sale;
        this.role_id = user.role_id;
        this.role = user.role;
        this.status_id = user.status_id;
        this.status = user.status;
        this.created_at = user.created_at;
        this.updated_at = user.updated_at;
    }
}

export class UserPointSaleDAL implements TUserPointSaleDAL {
    id: string;
    name: string;
    budget: number;
    address: string;
    department: string;
    municipality: string;
    neighborhood: string;
    latitude: number;
    longitude: number;

    constructor(point: TUserPointSaleDAL) {
        this.id = point.id;
        this.name = point.name;
        this.address = point.address;
        this.budget = point.budget;
        this.department = point.department;
        this.municipality = point.municipality;
        this.neighborhood = point.neighborhood;
        this.latitude = point.latitude;
        this.longitude = point.longitude;
    }
}
