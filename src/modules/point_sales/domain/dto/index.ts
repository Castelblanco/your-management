export type TPointSaleAPI = {
    _id: string;
    name: string;
    address: string;
    budget: string;
    status_id: string;
    city_id: string;
    city: string;
    status: string;
    users?: TPointSaleUserAPI[];
};

export type TPointSaleUserAPI = {
    _id: string;
    first_name: string;
    last_name: string;
    document_id: string;
    email: string;
    phone: string;
    address: string;
    role_id: string;
    role: string;
};

export class PointSaleAPI implements TPointSaleAPI {
    _id: string;
    name: string;
    address: string;
    budget: string;
    status_id: string;
    city_id: string;
    city: string;
    status: string;
    users?: TPointSaleUserAPI[];

    constructor(pointSale: TPointSaleAPI) {
        this._id = pointSale._id;
        this.name = pointSale.name;
        this.address = pointSale.address;
        this.budget = pointSale.budget;
        this.status_id = pointSale.status_id;
        this.city_id = pointSale.city_id;
        this.city = pointSale.city;
        this.status = pointSale.status;
        this.users = pointSale.users;
    }
}

export class PointSaleUserAPI implements TPointSaleUserAPI {
    _id: string;
    first_name: string;
    last_name: string;
    document_id: string;
    email: string;
    phone: string;
    address: string;
    role_id: string;
    role: string;

    constructor(user: TPointSaleUserAPI) {
        this._id = user._id;
        this.first_name = user.first_name;
        this.last_name = user.last_name;
        this.document_id = user.document_id;
        this.email = user.email;
        this.phone = user.phone;
        this.address = user.address;
        this.role_id = user.role_id;
        this.role = user.role;
    }
}
