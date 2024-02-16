import {
    type Prisma,
    type Client_Status,
    type Client_Type,
    type Natural_Client,
} from '@prisma/client';

export type TNaturalClientDAL = Natural_Client & {
    type: TNaturalClientTypeDAL;
    status?: TNaturalClientStatusDAL;
};

export type TNaturalClientTypeDAL = Client_Type;
export type TNaturalClientStatusDAL = Client_Status;

export type TNaturalClientFilterDAL = {
    number_movil?: Prisma.StringFilter;
    address?: Prisma.StringFilter;
    document_id?: Prisma.StringFilter;
    first_name?: Prisma.StringFilter;
    last_name?: Prisma.StringFilter;
    status_id?: Prisma.StringFilter;
};

export class NaturalClientDAL implements TNaturalClientDAL {
    id: string;
    number_movil: string;
    address: string;
    document_id: string;
    first_name: string;
    last_name: string;
    type_id: string;
    status_id: string;
    type: TNaturalClientTypeDAL;
    status?: TNaturalClientStatusDAL;

    constructor(client: TNaturalClientDAL) {
        this.id = client.id;
        this.number_movil = client.number_movil;
        this.address = client.address;
        this.document_id = client.document_id;
        this.first_name = client.first_name;
        this.last_name = client.last_name;
        this.type_id = client.type_id;
        this.status_id = client.status_id;
        this.type = client.type;
        this.status = client.status;
    }
}
