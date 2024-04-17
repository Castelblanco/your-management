export type TUserDOM = {
    id: string;
    firstName: string;
    lastName: string;
    documentId: string;
    email: string;
    password: string;
    phone: string;
    address: string;
    createdAt: Date;
    updatedAt: Date;
    picture?: TUserPictureDOM;
    status?: TUserStatusDOM;
    role?: TUserRoleDOM;
    pointSale?: TUserPointSaleDOM;
};

export type TUserPictureDOM = {
    id: string;
    url: string;
};

export type TUserStatusDOM = {
    id: string;
    name: string;
};

export type TUserRoleDOM = {
    id: string;
    name: string;
};

export type TUserPointSaleDOM = {
    id: string;
    name: string;
    address: string;
    budget: number;
    department: string;
    municipality: string;
    neighborhood: string;
    latitude: number;
    longitude: number;
};

export type TUserFilterDOM = {
    firstName?: string;
    lastName?: string;
    documentId?: string;
    email?: string;
    address?: string;
    statusId?: string;
    pointSaleId?: string;
    roleId?: string;
    startTime?: string;
    endTime?: string;
};

export type TUserOPT = {
    limit: number;
    offset: number;
    pointSale?: boolean;
    role?: boolean;
    status?: boolean;
};

export type TUserLoginDOM = {
    id: string;
    firstName: string;
    lastName: string;
    documentId: string;
    email: string;
    phone: string;
    address: string;
    createdAt: Date;
    updatedAt: Date;
    picture?: TUserPictureDOM;
    status?: TUserStatusDOM;
    role?: TUserRoleDOM;
    token: string;
    pointSale?: TUserPointSaleDOM;
};

export class UserDOM implements TUserDOM {
    id: string;
    firstName: string;
    lastName: string;
    documentId: string;
    email: string;
    picture?: TUserPictureDOM;
    password: string;
    phone: string;
    address: string;
    createdAt: Date;
    updatedAt: Date;
    status?: TUserStatusDOM;
    role?: TUserRoleDOM;
    pointSale?: TUserPointSaleDOM;

    constructor(user: TUserDOM) {
        this.id = user.id;
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.documentId = user.documentId;
        this.password = user.password;
        this.email = user.email;
        this.picture = user.picture;
        this.phone = user.phone;
        this.address = user.address;
        this.createdAt = user.createdAt;
        this.updatedAt = user.updatedAt;
        this.status = user.status;
        this.role = user.role;
        this.pointSale = user.pointSale;
    }
}

export class UserPictureDOM implements TUserPictureDOM {
    id: string;
    url: string;

    constructor(picture: TUserPictureDOM) {
        this.id = picture.id;
        this.url = picture.url;
    }
}

export class UserPointSaleDOM implements TUserPointSaleDOM {
    id: string;
    name: string;
    address: string;
    budget: number;
    department: string;
    municipality: string;
    neighborhood: string;
    latitude: number;
    longitude: number;

    constructor(point: TUserPointSaleDOM) {
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

export class UserLoginDOM implements TUserLoginDOM {
    id: string;
    firstName: string;
    lastName: string;
    documentId: string;
    email: string;
    picture?: TUserPictureDOM;
    phone: string;
    address: string;
    createdAt: Date;
    updatedAt: Date;
    token: string;
    status?: TUserStatusDOM;
    role?: TUserRoleDOM;
    pointSale?: TUserPointSaleDOM;

    constructor(login: TUserLoginDOM) {
        this.id = login.id;
        this.firstName = login.firstName;
        this.lastName = login.lastName;
        this.documentId = login.documentId;
        this.email = login.email;
        this.picture = login.picture;
        this.phone = login.phone;
        this.address = login.address;
        this.role = login.role;
        this.pointSale = login.pointSale;
        this.token = login.token;
        this.createdAt = login.createdAt;
        this.updatedAt = login.updatedAt;
    }
}
