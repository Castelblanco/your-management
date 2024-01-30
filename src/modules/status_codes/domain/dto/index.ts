export type TStatusCodeAPI = {
    _id: string;
    name: string;
};

export class StatusCodeAPI implements TStatusCodeAPI {
    _id: string;
    name: string;

    constructor(status: TStatusCodeAPI) {
        this._id = status._id;
        this.name = status.name;
    }
}
