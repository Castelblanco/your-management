export type TPointSaleDAL = {
    id: string;
    name: string;
    address: string;
    budget: number;
    status_id: string;
    city_id: string;
    city: string;
    status: string;
    latitude: number;
    longitude: number;
    users?: TPointSaleUserDAL[];
};

export type TPointSaleUserDAL = {
    id: string;
    first_name: string;
    last_name: string;
    document_id: string;
    email: string;
    phone: string;
    address: string;
    role_id: string;
    role: string;
};

export class PointSaleDAL implements TPointSaleDAL {
    id: string;
    name: string;
    address: string;
    budget: number;
    status_id: string;
    city_id: string;
    city: string;
    status: string;
    latitude: number;
    longitude: number;
    users?: TPointSaleUserDAL[];

    constructor(pointSale: TPointSaleDAL) {
        this.id = pointSale.id;
        this.name = pointSale.name;
        this.address = pointSale.address;
        this.budget = pointSale.budget;
        this.status_id = pointSale.status_id;
        this.city_id = pointSale.city_id;
        this.city = pointSale.city;
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
    role_id: string;
    role: string;

    constructor(user: TPointSaleUserDAL) {
        this.id = user.id;
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
