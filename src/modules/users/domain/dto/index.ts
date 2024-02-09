export type TUserAPI = {
    _id: string;
    first_name: string;
    last_name: string;
    document_id: string;
    email: string;
    password: string;
    phone: string;
    address: string;
    created_at: Date;
    updated_at: Date;
    status?: TUserStatusAPI;
    role?: TUserRoleAPI;
    point_sale?: TUserPointSaleAPI;
};

export type TUserStatusAPI = {
    _id: string;
    name: string;
};

export type TUserRoleAPI = {
    _id: string;
    name: string;
};

export type TUserPointSaleAPI = {
    _id: string;
    name: string;
    address: string;
    budget: number;
    city?: TUserPointSaleCityAPI;
};

export type TUserPointSaleCityAPI = {
    _id: string;
    name: string;
    department?: TUserPointSaleDepartamentAPI;
};

export type TUserPointSaleDepartamentAPI = {
    _id: string;
    name: string;
};

export type TUserLoginAPI = {
    _id: string;
    first_name: string;
    last_name: string;
    document_id: string;
    email: string;
    phone: string;
    address: string;
    created_at: Date;
    updated_at: Date;
    status?: TUserStatusAPI;
    role?: TUserRoleAPI;
    token: string;
    point_sale?: TUserPointSaleAPI;
};

export class UserAPI implements TUserAPI {
    _id: string;
    first_name: string;
    last_name: string;
    document_id: string;
    email: string;
    password: string;
    phone: string;
    address: string;
    created_at: Date;
    updated_at: Date;
    status?: TUserStatusAPI;
    role?: TUserRoleAPI;
    point_sale?: TUserPointSaleAPI;

    constructor(user: TUserAPI) {
        this._id = user._id;
        this.first_name = user.first_name;
        this.last_name = user.last_name;
        this.document_id = user.document_id;
        this.password = user.password;
        this.email = user.email;
        this.phone = user.phone;
        this.address = user.address;
        this.created_at = user.created_at;
        this.updated_at = user.updated_at;
        this.status = user.status;
        this.role = user.role;
        this.point_sale = user.point_sale;
    }
}

export class UserPointSaleAPI implements TUserPointSaleAPI {
    _id: string;
    name: string;
    address: string;
    budget: number;
    city?: TUserPointSaleCityAPI;

    constructor(point: TUserPointSaleAPI) {
        this._id = point._id;
        this.name = point.name;
        this.address = point.address;
        this.budget = point.budget;
        this.city = point.city;
    }
}

export class UserLoginAPI implements TUserLoginAPI {
    _id: string;
    first_name: string;
    last_name: string;
    document_id: string;
    email: string;
    phone: string;
    address: string;
    created_at: Date;
    updated_at: Date;
    status?: TUserStatusAPI;
    role?: TUserRoleAPI;
    token: string;
    point_sale?: TUserPointSaleAPI;

    constructor(login: TUserLoginAPI) {
        this._id = login._id;
        this.first_name = login.first_name;
        this.last_name = login.last_name;
        this.document_id = login.document_id;
        this.email = login.email;
        this.phone = login.phone;
        this.address = login.address;
        this.role = login.role;
        this.point_sale = login.point_sale;
        this.token = login.token;
        this.created_at = login.created_at;
        this.updated_at = login.updated_at;
    }
}
