export type TNaturalClientAPI = {
    _id: string;
    number_movil: string;
    address: string;
    document_id: string;
    first_name: string;
    last_name: string;
    type: TNaturalClientTypeAPI;
    status?: TNaturalClientStatusAPI;
};

export type TNaturalClientTypeAPI = {
    _id: string;
    name: string;
};

export type TNaturalClientStatusAPI = {
    _id: string;
    name: string;
};

export class NaturalClientAPI implements TNaturalClientAPI {
    _id: string;
    number_movil: string;
    address: string;
    document_id: string;
    first_name: string;
    last_name: string;
    type: TNaturalClientTypeAPI;
    status?: TNaturalClientStatusAPI;

    constructor(client: TNaturalClientAPI) {
        this._id = client._id;
        this.number_movil = client.number_movil;
        this.address = client.address;
        this.document_id = client.document_id;
        this.first_name = client.first_name;
        this.last_name = client.last_name;
        this.type = client.type;
        this.status = client.status;
    }
}
