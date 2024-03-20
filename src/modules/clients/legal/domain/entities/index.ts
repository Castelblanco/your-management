export type TLegalClientDOM = {
    id: string;
    numberMovil: string;
    address: string;
    nit: string;
    businessName: string;
    natural: boolean;
    status?: TLegalClientStatusDOM;
};

export type TLegalClientStatusDOM = {
    id: string;
    name: string;
};

export type TLegalClientFilterDOM = {
    numberMovil?: string;
    address?: string;
    nit?: string;
    businessName?: string;
    statusId?: string;
};

export type TLegalClientOPT = {
    limit: number;
    offset: number;
    status: boolean;
};

export class LegalClientDOM implements TLegalClientDOM {
    id: string;
    numberMovil: string;
    address: string;
    nit: string;
    businessName: string;
    natural: boolean;
    status?: TLegalClientStatusDOM;

    constructor(client: TLegalClientDOM) {
        this.id = client.id;
        this.numberMovil = client.numberMovil;
        this.address = client.address;
        this.nit = client.nit;
        this.businessName = client.businessName;
        this.natural = client.natural;
        this.status = client.status;
    }
}
