export type TUserDOM = {
    id: string;
    firstName: string;
    lastName: string;
    documentId: string;
    email: string;
    password: string;
    phone: string;
    address: string;
    pointSaleId: string;
    roleId: string;
    createdAt: Date;
    updatedAt: Date;
    role?: string;
    pointSale?: TUserPointSaleDOM;
};

export type TUserPointSaleDOM = {
    id: string;
    name: string;
    address: string;
    budget: string;
    statusId: string;
    cityId: string;
    city?: string;
    status?: string;
};

export type TUserFilterDOM = {
    firstName?: string;
    lastName?: string;
    documentId?: string;
    email?: string;
    address?: string;
    pointSaleId?: string;
    roleId?: string;
    startTime?: string;
    endTime?: string;
};

export type TUserOPT = {
    limit: number;
    offset: number;
    pointSale: boolean;
    role: boolean;
};

export type TUserLoginDOM = {
    id: string;
    firstName: string;
    lastName: string;
    documentId: string;
    email: string;
    phone: string;
    address: string;
    role: string;
    token: string;
    pointSale: TUserPointSaleDOM;
};

export class UserDOM implements TUserDOM {
    id: string;
    firstName: string;
    lastName: string;
    documentId: string;
    email: string;
    password: string;
    phone: string;
    address: string;
    pointSaleId: string;
    roleId: string;
    createdAt: Date;
    updatedAt: Date;
    role?: string;
    pointSale?: TUserPointSaleDOM;

    constructor(user: TUserDOM) {
        this.id = user.id;
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.documentId = user.documentId;
        this.password = user.password;
        this.email = user.email;
        this.phone = user.phone;
        this.address = user.address;
        this.pointSaleId = user.pointSaleId;
        this.roleId = user.roleId;
        this.role = user.role;
        this.createdAt = user.createdAt;
        this.updatedAt = user.updatedAt;
        this.pointSale = user.pointSale;
    }
}

export class UserPointSaleDOM implements TUserPointSaleDOM {
    id: string;
    name: string;
    address: string;
    budget: string;
    statusId: string;
    cityId: string;
    city?: string;
    status?: string;

    constructor(point: TUserPointSaleDOM) {
        this.id = point.id;
        this.name = point.name;
        this.address = point.address;
        this.budget = point.budget;
        this.statusId = point.statusId;
        this.cityId = point.cityId;
        this.city = point.city;
        this.status = point.status;
    }
}

export class UserLoginDOM implements TUserLoginDOM {
    id: string;
    firstName: string;
    lastName: string;
    documentId: string;
    email: string;
    phone: string;
    address: string;
    role: string;
    token: string;
    pointSale: TUserPointSaleDOM;

    constructor(login: TUserLoginDOM) {
        this.id = login.id;
        this.firstName = login.firstName;
        this.lastName = login.lastName;
        this.documentId = login.documentId;
        this.email = login.email;
        this.phone = login.phone;
        this.address = login.address;
        this.role = login.role;
        this.pointSale = login.pointSale;
        this.token = login.token;
    }
}
