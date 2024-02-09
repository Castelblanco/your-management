export type TLegalClientDOM = {
    id: string;
    numberMovil: string;
    address: string;
    nit: string;
    businessName: string;
    type: TLegalClientTypeDOM;
    status?: TLegalClientStatusDOM;
};

export type TLegalClientTypeDOM = {
    id: string;
    name: string;
};

export type TLegalClientStatusDOM = {
    id: string;
    name: string;
};

export type TLegalClientFilterDOM = {
    id?: string;
    numberMovil?: string;
    address?: string;
    nit?: string;
    businessName?: string;
    typeId?: string;
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
    type: TLegalClientTypeDOM;
    status?: TLegalClientStatusDOM;

    constructor(client: TLegalClientDOM) {
        this.id = client.id;
        this.numberMovil = client.numberMovil;
        this.address = client.address;
        this.nit = client.nit;
        this.businessName = client.businessName;
        this.type = client.type;
        this.status = client.status;
    }
}
