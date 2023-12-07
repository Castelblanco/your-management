export type TPointSaleDOM = {
    id: string;
    name: string;
    address: string;
    budget: string;
    statusId: string;
    cityId: string;
    city: string;
    status: string;
    users?: TPointSaleUserDOM[];
};

export type TPointSaleUserDOM = {
    id: string;
    firstName: string;
    lastName: string;
    documentId: string;
    email: string;
    phone: string;
    address: string;
    roleId: string;
    role: string;
};

export type TPointSaleFilterDOM = {
    name?: string;
    statusId?: string;
    cityId?: string;
};

export type TPointSaleOPT = {
    limit: number;
    offset: number;
    users: boolean;
};

export class PointSaleDOM implements TPointSaleDOM {
    id: string;
    name: string;
    address: string;
    budget: string;
    statusId: string;
    cityId: string;
    city: string;
    status: string;
    users?: TPointSaleUserDOM[];

    constructor(pointSale: TPointSaleDOM) {
        this.id = pointSale.id;
        this.name = pointSale.name;
        this.address = pointSale.address;
        this.budget = pointSale.budget;
        this.statusId = pointSale.statusId;
        this.cityId = pointSale.cityId;
        this.city = pointSale.city;
        this.status = pointSale.status;
        this.users = pointSale.users;
    }
}

export class PointSaleUserDOM implements TPointSaleUserDOM {
    id: string;
    firstName: string;
    lastName: string;
    documentId: string;
    email: string;
    phone: string;
    address: string;
    roleId: string;
    role: string;

    constructor(user: TPointSaleUserDOM) {
        this.id = user.id;
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.documentId = user.documentId;
        this.email = user.email;
        this.phone = user.phone;
        this.address = user.address;
        this.roleId = user.roleId;
        this.role = user.role;
    }
}
