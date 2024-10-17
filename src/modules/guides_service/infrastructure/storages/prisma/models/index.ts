import {
    type Prisma,
    type Guide_Service,
    type Guide_Service_Novelty,
    type Guide_Service_Status,
    type Guide_Service_Type,
    type Users_Roles,
} from '@prisma/client';
import { type JsonValue } from '@prisma/client/runtime/library';

export type TGuideServiceDAL = Guide_Service & {
    status?: TGuideServiceStatusDAL;
    novelty?: TGuideServiceNoveltyDAL;
    service?: TGuideServiceTypeServiceDAL;
    user?: TGuideServiceUserDAL;
    point_sale_origin?: TGuideServicePointSaleDAL;
    point_sale_destination?: TGuideServicePointSaleDAL;
    client_legal_destination: TGuideServiceLegalClientDAL | null;
    client_legal_origin: TGuideServiceLegalClientDAL | null;
    client_natural_destination: TGuideServiceNaturalClientDAL | null;
    client_natural_origin: TGuideServiceNaturalClientDAL | null;
};

export type TGuideServiceStatusDAL = Guide_Service_Status;
export type TGuideServiceNoveltyDAL = Guide_Service_Novelty;
export type TGuideServiceTypeServiceDAL = Guide_Service_Type;

export type TGuideServiceFilterDAL = {
    user_id?: Prisma.StringFilter;
    point_sale_origin_id?: Prisma.StringFilter;
    collection?: Prisma.BoolFilter;
    created_at?: Prisma.DateTimeFilter;
    updated_at?: Prisma.DateTimeFilter;
};

export type TGuideServicePointSaleDAL = {
    id: string;
    name: string;
    address: string;
    department: string;
    municipality: string;
    neighborhood: string;
    latitude: number;
    longitude: number;
    budget: number;
};

// User in Guide
export type TGuideServiceUserDAL = {
    id: string;
    first_name: string;
    last_name: string;
    document_id: string;
    email: string;
    phone: string;
    address: string;
    role: TGuideServiceUserRoleDAL;
};

export type TGuideServiceUserRoleDAL = Users_Roles;
// Client in Guide
export type TGuideServiceLegalClientDAL = {
    id: string;
    number_movil: string;
    address: string;
    nit: string;
    business_name: string;
};

export type TGuideServiceNaturalClientDAL = {
    id: string;
    number_movil: string;
    address: string;
    document_id: string;
    first_name: string;
    last_name: string;
};

export class GuideServiceDAL implements TGuideServiceDAL {
    id: string;
    number: bigint;
    commodity: JsonValue[];
    price: number;
    collection: boolean;
    created_at: Date;
    updated_at: Date;
    status?: TGuideServiceStatusDAL;
    novelty?: TGuideServiceNoveltyDAL;
    service?: TGuideServiceTypeServiceDAL;
    user?: TGuideServiceUserDAL;
    point_sale_origin?: TGuideServicePointSaleDAL;
    point_sale_destination?: TGuideServicePointSaleDAL;
    client_legal_destination: TGuideServiceLegalClientDAL | null;
    client_legal_origin: TGuideServiceLegalClientDAL | null;
    client_natural_destination: TGuideServiceNaturalClientDAL | null;
    client_natural_origin: TGuideServiceNaturalClientDAL | null;
    status_id: string;
    novelty_id: string;
    service_id: string;
    user_id: string;
    point_sale_origin_id: string;
    point_sale_destination_id: string;
    client_natural_origin_id: string | null;
    client_natural_destination_id: string | null;
    client_legal_origin_id: string | null;
    client_legal_destination_id: string | null;

    constructor(guide: TGuideServiceDAL) {
        this.id = guide.id;
        this.number = guide.number;
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
        this.client_legal_destination = guide.client_legal_destination;
        this.client_legal_origin = guide.client_legal_origin;
        this.client_natural_destination = guide.client_natural_destination;
        this.client_natural_origin = guide.client_natural_origin;
        this.status_id = guide.status_id;
        this.novelty_id = guide.novelty_id;
        this.service_id = guide.service_id;
        this.user_id = guide.user_id;
        this.point_sale_origin_id = guide.point_sale_origin_id;
        this.point_sale_destination_id = guide.point_sale_destination_id;
        this.client_natural_origin_id = guide.client_natural_origin_id;
        this.client_natural_destination_id = guide.client_natural_destination_id;
        this.client_legal_origin_id = guide.client_legal_origin_id;
        this.client_legal_destination_id = guide.client_legal_destination_id;
    }
}

export class GuideServicePointSaleDAL implements TGuideServicePointSaleDAL {
    id: string;
    name: string;
    address: string;
    department: string;
    municipality: string;
    neighborhood: string;
    latitude: number;
    longitude: number;
    budget: number;

    constructor(pointSale: TGuideServicePointSaleDAL) {
        this.id = pointSale.id;
        this.name = pointSale.name;
        this.address = pointSale.address;
        this.department = pointSale.department;
        this.municipality = pointSale.municipality;
        this.neighborhood = pointSale.neighborhood;
        this.latitude = pointSale.latitude;
        this.longitude = pointSale.longitude;
        this.budget = pointSale.budget;
    }
}

export class GuideServiceUserDAL implements TGuideServiceUserDAL {
    id: string;
    first_name: string;
    last_name: string;
    document_id: string;
    email: string;
    phone: string;
    address: string;
    role: TGuideServiceUserRoleDAL;

    constructor(user: TGuideServiceUserDAL) {
        this.id = user.id;
        this.first_name = user.first_name;
        this.last_name = user.last_name;
        this.document_id = user.document_id;
        this.email = user.email;
        this.phone = user.phone;
        this.address = user.address;
        this.role = user.role;
    }
}

export class GuideServiceLegalClientDAL implements TGuideServiceLegalClientDAL {
    id: string;
    number_movil: string;
    address: string;
    nit: string;
    business_name: string;

    constructor(client: TGuideServiceLegalClientDAL) {
        this.id = client.id;
        this.number_movil = client.number_movil;
        this.address = client.address;
        this.nit = client.nit;
        this.business_name = client.business_name;
    }
}

export class GuideServiceNaturalClientDAL implements TGuideServiceNaturalClientDAL {
    id: string;
    number_movil: string;
    address: string;
    document_id: string;
    first_name: string;
    last_name: string;

    constructor(client: TGuideServiceNaturalClientDAL) {
        this.id = client.id;
        this.number_movil = client.number_movil;
        this.address = client.address;
        this.document_id = client.document_id;
        this.first_name = client.first_name;
        this.last_name = client.last_name;
    }
}
