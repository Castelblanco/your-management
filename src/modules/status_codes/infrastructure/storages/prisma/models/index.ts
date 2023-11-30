export type TStatusCodeDAL = {
    id: string;
    name: string;
};

export class StatusCodeDAL implements TStatusCodeDAL {
    id: string;
    name: string;

    constructor(status: StatusCodeDAL) {
        this.id = status.id;
        this.name = status.name;
    }
}
