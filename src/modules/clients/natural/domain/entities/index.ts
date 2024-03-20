export type TNaturalClientDOM = {
    id: string;
    numberMovil: string;
    address: string;
    documentId: string;
    firstName: string;
    lastName: string;
    natural: boolean;
    status?: TNaturalClientStatusDOM;
};

export type TNaturalClientStatusDOM = {
    id: string;
    name: string;
};

export type TNaturalClientFilterDOM = {
    numberMovil?: string;
    address?: string;
    documentId?: string;
    firstName?: string;
    lastName?: string;
    statusId?: string;
};

export type TNaturalClientOPT = {
    limit: number;
    offset: number;
    status?: boolean;
};

export class NaturalClientDOM implements TNaturalClientDOM {
    id: string;
    numberMovil: string;
    address: string;
    documentId: string;
    firstName: string;
    lastName: string;
    natural: boolean;
    status?: TNaturalClientStatusDOM;

    constructor(client: TNaturalClientDOM) {
        this.id = client.id;
        this.numberMovil = client.numberMovil;
        this.address = client.address;
        this.documentId = client.documentId;
        this.firstName = client.firstName;
        this.lastName = client.lastName;
        this.natural = client.natural;
        this.status = client.status;
    }
}
