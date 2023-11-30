export type TStatusCodeAPI = {
    id: string;
    name: string;
};

export class StatusCodeAPI implements TStatusCodeAPI {
    id: string;
    name: string;

    constructor(status: TStatusCodeAPI) {
        this.id = status.id;
        this.name = status.name;
    }
}
