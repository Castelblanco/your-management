export type TGuideServiceAPI = {
    _id: string;
    commodity: TGuideServiceCommodityAPI[];
    price: number;
    collection: boolean;
    created_at: Date;
    updated_at: Date;
    status?: TGuideServiceStatusAPI;
    novelty?: TGuideServiceNoveltyAPI;
    service?: TGuideServiceTypeServiceAPI;
    user?: TGuideServiceUserAPI;
    point_sale_origin?: TGuideServicePointSaleAPI;
    point_sale_destination?: TGuideServicePointSaleAPI;
    client_origin?: TGuideServiceLegalClientAPI | TGuideServiceNaturalClientAPI;
    client_destination?: TGuideServiceLegalClientAPI | TGuideServiceNaturalClientAPI;
};

export type TGuideServiceCommodityAPI = {
    units: number;
    weight: number;
};

export type TGuideServicePointSaleAPI = {
    _id: string;
    name: string;
    address: string;
    latitude: number;
    longitude: number;
    budget: number;
};

export type TGuideServiceStatusAPI = {
    _id: string;
    name: string;
};

export type TGuideServiceNoveltyAPI = {
    _id: string;
    name: string;
};

export type TGuideServiceTypeServiceAPI = {
    _id: string;
    name: string;
    tab: string;
};

// User in Guide
export type TGuideServiceUserAPI = {
    _id: string;
    first_name: string;
    last_name: string;
    document_id: string;
    email: string;
    phone: string;
    address: string;
    status: TGuideServiceUserStatusAPI;
    role: TGuideServiceUserRoleAPI;
};

export type TGuideServiceUserStatusAPI = {
    _id: string;
    name: string;
};

export type TGuideServiceUserRoleAPI = {
    _id: string;
    name: string;
};

// Client in Guide
export type TGuideServiceLegalClientAPI = {
    _id: string;
    number_movil: string;
    address: string;
    nit: string;
    business_name: string;
};

export type TGuideServiceNaturalClientAPI = {
    _id: string;
    number_movil: string;
    address: string;
    document_id: string;
    first_name: string;
    last_name: string;
};

export class GuideServiceAPI implements TGuideServiceAPI {
    _id: string;
    commodity: TGuideServiceCommodityAPI[];
    price: number;
    collection: boolean;
    created_at: Date;
    updated_at: Date;
    status?: TGuideServiceStatusAPI;
    novelty?: TGuideServiceNoveltyAPI;
    service?: TGuideServiceTypeServiceAPI;
    user?: TGuideServiceUserAPI;
    point_sale_origin?: TGuideServicePointSaleAPI;
    point_sale_destination?: TGuideServicePointSaleAPI;
    client_origin?: TGuideServiceLegalClientAPI | TGuideServiceNaturalClientAPI;
    client_destination?: TGuideServiceLegalClientAPI | TGuideServiceNaturalClientAPI;

    constructor(guide: TGuideServiceAPI) {
        this._id = guide._id;
        this.commodity = guide.commodity;
        this.price = guide.price;
        this.created_at = guide.created_at;
        this.updated_at = guide.updated_at;
        this.status = guide.status;
        this.novelty = guide.novelty;
        this.collection = guide.collection;
        this.service = guide.service;
        this.user = guide.user;
        this.point_sale_origin = guide.point_sale_origin;
        this.point_sale_destination = guide.point_sale_destination;
        this.client_origin = guide.client_origin;
        this.client_destination = guide.client_destination;
    }
}

export class GuideServicePointSaleAPI implements TGuideServicePointSaleAPI {
    _id: string;
    name: string;
    address: string;
    latitude: number;
    longitude: number;
    budget: number;

    constructor(pointSale: TGuideServicePointSaleAPI) {
        this._id = pointSale._id;
        this.name = pointSale.name;
        this.address = pointSale.address;
        this.latitude = pointSale.latitude;
        this.longitude = pointSale.longitude;
        this.budget = pointSale.budget;
    }
}

export class GuideServiceUserAPI implements TGuideServiceUserAPI {
    _id: string;
    first_name: string;
    last_name: string;
    document_id: string;
    email: string;
    phone: string;
    address: string;
    status: TGuideServiceUserStatusAPI;
    role: TGuideServiceUserRoleAPI;

    constructor(user: TGuideServiceUserAPI) {
        this._id = user._id;
        this.first_name = user.first_name;
        this.last_name = user.last_name;
        this.document_id = user.document_id;
        this.email = user.email;
        this.phone = user.phone;
        this.address = user.address;
        this.status = user.status;
        this.role = user.role;
    }
}

export class GuideServiceLegalClientAPI implements TGuideServiceLegalClientAPI {
    _id: string;
    number_movil: string;
    address: string;
    nit: string;
    business_name: string;

    constructor(client: TGuideServiceLegalClientAPI) {
        this._id = client._id;
        this.number_movil = client.number_movil;
        this.address = client.address;
        this.nit = client.nit;
        this.business_name = client.business_name;
    }
}

export class GuideServiceNaturalClientAPI implements TGuideServiceNaturalClientAPI {
    _id: string;
    number_movil: string;
    address: string;
    document_id: string;
    first_name: string;
    last_name: string;

    constructor(client: TGuideServiceNaturalClientAPI) {
        this._id = client._id;
        this.number_movil = client.number_movil;
        this.address = client.address;
        this.document_id = client.document_id;
        this.first_name = client.first_name;
        this.last_name = client.last_name;
    }
}
