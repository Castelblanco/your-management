export type TLegalClientAPI = {
    _id: string;
    number_movil: string;
    address: string;
    nit: string;
    business_name: string;
    natural: boolean;
    status?: TLegalClientStatusAPI;
};

export type TLegalClientStatusAPI = {
    _id: string;
    name: string;
};

export class LegalClientAPI implements TLegalClientAPI {
    _id: string;
    number_movil: string;
    address: string;
    nit: string;
    business_name: string;
    natural: boolean;
    status?: TLegalClientStatusAPI;

    constructor(client: TLegalClientAPI) {
        this._id = client._id;
        this.number_movil = client.number_movil;
        this.address = client.address;
        this.nit = client.nit;
        this.business_name = client.business_name;
        this.natural = client.natural;
        this.status = client.status;
    }
}
