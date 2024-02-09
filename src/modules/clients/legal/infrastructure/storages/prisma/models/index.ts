import type { Client_Status, Client_Type, Legal_Client } from '@prisma/client';

export type TLegalClientDAL = Legal_Client & {
    type: Client_Type;
    status?: Client_Status;
};

export type TLegalClientFilterDAL = {
    id?: string;
    number_movil?: string;
    address?: string;
    nit?: string;
    business_name?: string;
    type_id?: string;
    status_id?: string;
};

export class LegalClientDAL implements TLegalClientDAL {
    id: string;
    number_movil: string;
    address: string;
    nit: string;
    business_name: string;
    type_id: string;
    status_id: string;
    type: Client_Type;
    status?: Client_Status;

    constructor(client: TLegalClientDAL) {
        this.id = client.id;
        this.number_movil = client.number_movil;
        this.address = client.address;
        this.nit = client.nit;
        this.business_name = client.business_name;
        this.type_id = client.type_id;
        this.status_id = client.status_id;
        this.type = client.type;
        this.status = client.status;
    }
}
