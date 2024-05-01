export type TGuideServiceDOM = {
    id: string;
    commodity: TGuideServiceCommodityDOM[];
    price: number;
    collection: boolean;
    createdAt: Date;
    updatedAt: Date;
    status?: TGuideServiceStatusDOM;
    novelty?: TGuideServiceNoveltyDOM;
    service?: TGuideServiceTypeServiceDOM;
    user?: TGuideServiceUserDOM;
    pointSaleOrigin?: TGuideServicePointSaleDOM;
    pointSaleDestination?: TGuideServicePointSaleDOM;
    clientOrigin?: TGuideServiceLegalClientDOM | TGuideServiceNaturalClientDOM;
    clientDestination?: TGuideServiceLegalClientDOM | TGuideServiceNaturalClientDOM;
};

export type TGuideServiceCommodityDOM = {
    units: number;
    weight: number;
};

export type TGuideServicePointSaleDOM = {
    id: string;
    name: string;
    address: string;
    latitude: number;
    longitude: number;
    budget: number;
};

export type TGuideServiceStatusDOM = {
    id: string;
    name: string;
};

export type TGuideServiceNoveltyDOM = {
    id: string;
    name: string;
};

export type TGuideServiceTypeServiceDOM = {
    id: string;
    name: string;
    tab: string;
};

export type TGuideServiceFilterDOM = {
    userId: string;
};

export type TGuideServiceRelations = {
    status?: boolean;
    novelty?: boolean;
    collection?: boolean;
    service?: boolean;
    user?: boolean;
    pointSaleOrigin?: boolean;
    pointSaleDestination?: boolean;
    clientOrigin?: boolean;
    clientDestination?: boolean;
};

export type TGuideServiceOPT = TGuideServiceRelations & {
    limit: number;
    offset: number;
};

// User in Guide
export type TGuideServiceUserDOM = {
    id: string;
    firstName: string;
    lastName: string;
    documentId: string;
    email: string;
    phone: string;
    address: string;
    status: TGuideServiceUserStatusDOM;
    role: TGuideServiceUserRoleDOM;
};

export type TGuideServiceUserStatusDOM = {
    id: string;
    name: string;
};

export type TGuideServiceUserRoleDOM = {
    id: string;
    name: string;
};

// Client in Guide

export type TGuideServiceLegalClientDOM = {
    id: string;
    numberMovil: string;
    address: string;
    nit: string;
    businessName: string;
};

export type TGuideServiceNaturalClientDOM = {
    id: string;
    numberMovil: string;
    address: string;
    documentId: string;
    firstName: string;
    lastName: string;
};

// Implementations
export class GuideServiceDOM implements TGuideServiceDOM {
    id: string;
    commodity: TGuideServiceCommodityDOM[];
    price: number;
    collection: boolean;
    createdAt: Date;
    updatedAt: Date;
    status?: TGuideServiceStatusDOM;
    novelty?: TGuideServiceNoveltyDOM;
    service?: TGuideServiceTypeServiceDOM;
    user?: TGuideServiceUserDOM;
    pointSaleOrigin?: TGuideServicePointSaleDOM;
    pointSaleDestination?: TGuideServicePointSaleDOM;
    clientOrigin?: TGuideServiceLegalClientDOM | TGuideServiceNaturalClientDOM;
    clientDestination?: TGuideServiceLegalClientDOM | TGuideServiceNaturalClientDOM;

    constructor(guide: TGuideServiceDOM) {
        this.id = guide.id;
        this.commodity = guide.commodity;
        this.price = guide.price;
        this.createdAt = guide.createdAt;
        this.updatedAt = guide.updatedAt;
        this.status = guide.status;
        this.novelty = guide.novelty;
        this.collection = guide.collection;
        this.service = guide.service;
        this.user = guide.user;
        this.pointSaleOrigin = guide.pointSaleOrigin;
        this.pointSaleDestination = guide.pointSaleDestination;
        this.clientOrigin = guide.clientOrigin;
        this.clientDestination = guide.clientDestination;
    }
}

export class GuideServicePointSaleDOM implements TGuideServicePointSaleDOM {
    id: string;
    name: string;
    address: string;
    latitude: number;
    longitude: number;
    budget: number;

    constructor(pointSale: TGuideServicePointSaleDOM) {
        this.id = pointSale.id;
        this.name = pointSale.name;
        this.address = pointSale.address;
        this.latitude = pointSale.latitude;
        this.longitude = pointSale.longitude;
        this.budget = pointSale.budget;
    }
}

export class GuideServiceUserDOM implements TGuideServiceUserDOM {
    id: string;
    firstName: string;
    lastName: string;
    documentId: string;
    email: string;
    phone: string;
    address: string;
    status: TGuideServiceUserStatusDOM;
    role: TGuideServiceUserRoleDOM;

    constructor(user: TGuideServiceUserDOM) {
        this.id = user.id;
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.documentId = user.documentId;
        this.email = user.email;
        this.phone = user.phone;
        this.address = user.address;
        this.status = user.status;
        this.role = user.role;
    }
}

export class GuideServiceLegalClientDOM implements TGuideServiceLegalClientDOM {
    id: string;
    numberMovil: string;
    address: string;
    nit: string;
    businessName: string;

    constructor(client: TGuideServiceLegalClientDOM) {
        this.id = client.id;
        this.numberMovil = client.numberMovil;
        this.address = client.address;
        this.nit = client.nit;
        this.businessName = client.businessName;
    }
}

export class GuideServiceNaturalClientDOM implements TGuideServiceNaturalClientDOM {
    id: string;
    numberMovil: string;
    address: string;
    documentId: string;
    firstName: string;
    lastName: string;

    constructor(client: TGuideServiceNaturalClientDOM) {
        this.id = client.id;
        this.numberMovil = client.numberMovil;
        this.address = client.address;
        this.documentId = client.documentId;
        this.firstName = client.firstName;
        this.lastName = client.lastName;
    }
}
