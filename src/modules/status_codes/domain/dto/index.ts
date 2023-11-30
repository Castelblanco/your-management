export type TStatusCodeApi = {
    id: string;
    name: string;
};

export class StatusCodeApi implements TStatusCodeApi {
    id: string;
    name: string;

    constructor(status: StatusCodeApi) {
        this.id = status.id;
        this.name = status.name;
    }
}
