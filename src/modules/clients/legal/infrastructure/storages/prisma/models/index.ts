import type { Client_Status, Legal_Client, Prisma } from '@prisma/client';

export type TLegalClientDAL = Legal_Client & {
    status?: Client_Status;
};

export type TLegalClientFilterDAL = {
    number_movil?: Prisma.StringFilter;
    address?: Prisma.StringFilter;
    nit?: Prisma.StringFilter;
    business_name?: Prisma.StringFilter;
    status_id?: Prisma.StringFilter;
};

export class LegalClientDAL implements TLegalClientDAL {
    id: string;
    number_movil: string;
    address: string;
    nit: string;
    business_name: string;
    status_id: string;
    natural: boolean;
    status?: Client_Status;

    constructor(client: TLegalClientDAL) {
        this.id = client.id;
        this.number_movil = client.number_movil;
        this.address = client.address;
        this.nit = client.nit;
        this.business_name = client.business_name;
        this.status_id = client.status_id;
        this.natural = client.natural;
        this.status = client.status;
    }
}
