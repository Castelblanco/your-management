export type TPointSaleAPI = {
    _id: string;
    name: string;
    address: string;
    budget: number;
    department: string;
    municipality: string;
    neighborhood: string;
    latitude: number;
    longitude: number;
    status?: TPointSaleStatusAPI;
    users?: TPointSaleUserAPI[];
};

export type TPointSaleStatusAPI = {
    _id: string;
    name: string;
};

export type TPointSaleUserAPI = {
    _id: string;
    first_name: string;
    last_name: string;
    document_id: string;
    email: string;
    phone: string;
    address: string;
    role: TPointSaleUserRoleAPI;
};

export type TPointSaleUserRoleAPI = {
    _id: string;
    name: string;
};

export class PointSaleAPI implements TPointSaleAPI {
    _id: string;
    name: string;
    address: string;
    budget: number;
    department: string;
    municipality: string;
    neighborhood: string;
    status?: TPointSaleStatusAPI;
    latitude: number;
    longitude: number;
    users?: TPointSaleUserAPI[];

    constructor(pointSale: TPointSaleAPI) {
        this._id = pointSale._id;
        this.name = pointSale.name;
        this.address = pointSale.address;
        this.budget = pointSale.budget;
        this.status = pointSale.status;
        this.status = pointSale.status;
        this.department = pointSale.department;
        this.municipality = pointSale.municipality;
        this.neighborhood = pointSale.neighborhood;
        this.users = pointSale.users;
        this.latitude = pointSale.latitude;
        this.longitude = pointSale.longitude;
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
    role: TPointSaleUserRoleAPI;

    constructor(user: TPointSaleUserAPI) {
        this._id = user._id;
        this.first_name = user.first_name;
        this.last_name = user.last_name;
        this.document_id = user.document_id;
        this.email = user.email;
        this.phone = user.phone;
        this.address = user.address;
        this.role = user.role;
    }
}
