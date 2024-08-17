export type TPointSaleDOM = {
    id: string;
    name: string;
    address: string;
    budget: number;
    department: string;
    municipality: string;
    neighborhood: string;
    latitude: number;
    longitude: number;
    status?: TPointSaleStatusDOM;
    users?: TPointSaleUserDOM[];
};

export type TPointSaleStatusDOM = {
    id: string;
    name: string;
};

export type TPointSaleUserDOM = {
    id: string;
    firstName: string;
    lastName: string;
    documentId: string;
    email: string;
    phone: string;
    address: string;
    role: TPointSaleUserRoleDOM;
};

export type TPointSaleUserRoleDOM = {
    id: string;
    name: string;
};

export type TPointSaleFilterDOM = {
    limit?: number;
    offset?: number;
    users?: boolean;
    name?: string;
    statusId?: string;
    cityId?: string;
};

export class PointSaleDOM implements TPointSaleDOM {
    id: string;
    name: string;
    address: string;
    budget: number;
    department: string;
    municipality: string;
    neighborhood: string;
    latitude: number;
    longitude: number;
    status?: TPointSaleStatusDOM;
    users?: TPointSaleUserDOM[];

    constructor(pointSale: TPointSaleDOM) {
        this.id = pointSale.id;
        this.name = pointSale.name;
        this.address = pointSale.address;
        this.budget = pointSale.budget;
        this.department = pointSale.department;
        this.municipality = pointSale.municipality;
        this.neighborhood = pointSale.neighborhood;
        this.status = pointSale.status;
        this.users = pointSale.users;
        this.latitude = pointSale.latitude;
        this.longitude = pointSale.longitude;
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
    role: TPointSaleUserRoleDOM;

    constructor(user: TPointSaleUserDOM) {
        this.id = user.id;
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.documentId = user.documentId;
        this.email = user.email;
        this.phone = user.phone;
        this.address = user.address;
        this.role = user.role;
    }
}
