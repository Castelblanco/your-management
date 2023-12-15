export type TUserAPI = {
    _id: string;
    first_name: string;
    last_name: string;
    document_id: string;
    email: string;
    password: string;
    phone: string;
    address: string;
    point_sale_id: string;
    role_id: string;
    created_at: Date;
    updated_at: Date;
    role?: string;
    point_sale?: TUserPointSaleAPI;
};

export type TUserPointSaleAPI = {
    _id: string;
    name: string;
    address: string;
    budget: string;
    status_id: string;
    city_id: string;
    city: string;
    status: string;
};

export type TUserLoginAPI = {
    _id: string;
    first_name: string;
    last_name: string;
    document_id: string;
    email: string;
    phone: string;
    address: string;
    role: string;
    token: string;
    point_sale: TUserPointSaleAPI;
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
    point_sale_id: string;
    role_id: string;
    created_at: Date;
    updated_at: Date;
    role?: string;
    point_sale?: TUserPointSaleAPI;

    constructor(user: TUserAPI) {
        this._id = user._id;
        this.first_name = user.first_name;
        this.last_name = user.last_name;
        this.document_id = user.document_id;
        this.email = user.email;
        this.password = user.password;
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

export class UserPointSaleAPI implements TUserPointSaleAPI {
    _id: string;
    name: string;
    address: string;
    budget: string;
    status_id: string;
    city_id: string;
    city: string;
    status: string;

    constructor(point: TUserPointSaleAPI) {
        this._id = point._id;
        this.name = point.name;
        this.address = point.address;
        this.budget = point.budget;
        this.status_id = point.status_id;
        this.city_id = point.city_id;
        this.city = point.city;
        this.status = point.status;
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
    role: string;
    token: string;
    point_sale: TUserPointSaleAPI;

    constructor(login: TUserLoginAPI) {
        this._id = login._id;
        this.first_name = login.first_name;
        this.last_name = login.last_name;
        this.document_id = login.document_id;
        this.email = login.email;
        this.phone = login.phone;
        this.address = login.address;
        this.role = login.role;
        this.token = login.token;
        this.point_sale = login.point_sale;
    }
}
