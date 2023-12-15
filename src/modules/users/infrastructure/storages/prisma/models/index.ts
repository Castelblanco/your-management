export type TUserDAL = {
    id: string;
    first_name: string;
    last_name: string;
    document_id: string;
    email: string;
    phone: string;
    address: string;
    point_sale_id: string;
    role_id: string;
    created_at: Date;
    updated_at: Date;
    role?: TUserRoleDAL;
    point_sale?: TUserPointSaleDAL;
};

export type TUserRoleDAL = {
    id: string;
    name: string;
};

export type TUserPointSaleDAL = {
    id: string;
    address: string;
    name: string;
    budget: string;
    status_id: string;
    city_id: string;
    city?: TUserPointSaleCityDAL;
    status?: TUserPointSaleStatusDAL;
};

export type TUserPointSaleCityDAL = {
    id: string;
    name: string;
    department_id: string;
    status_id: string;
};

export type TUserPointSaleStatusDAL = {
    id: string;
    name: string;
};

export class UserDAL implements TUserDAL {
    id: string;
    first_name: string;
    last_name: string;
    document_id: string;
    email: string;
    phone: string;
    address: string;
    point_sale_id: string;
    role_id: string;
    created_at: Date;
    updated_at: Date;
    role?: TUserRoleDAL;
    point_sale?: TUserPointSaleDAL;

    constructor(user: TUserDAL) {
        this.id = user.id;
        this.first_name = user.first_name;
        this.last_name = user.last_name;
        this.document_id = user.document_id;
        this.email = user.email;
        this.phone = user.phone;
        this.address = user.address;
        this.point_sale_id = user.point_sale_id;
        this.role_id = user.role_id;
        this.role = user.role;
        this.created_at = user.created_at;
        this.updated_at = user.updated_at;
        this.point_sale = user.point_sale;
    }
}

export class UserPointSaleDAL implements TUserPointSaleDAL {
    id: string;
    name: string;
    address: string;
    budget: string;
    status_id: string;
    city_id: string;
    city?: TUserPointSaleCityDAL;
    status?: TUserPointSaleStatusDAL;

    constructor(point: TUserPointSaleDAL) {
        this.id = point.id;
        this.name = point.name;
        this.address = point.address;
        this.budget = point.budget;
        this.status_id = point.status_id;
        this.city_id = point.city_id;
        this.city = point.city;
        this.status = point.status;
    }
}
