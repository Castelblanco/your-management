export type TStatusCodeDAL = {
    id: string;
    name: string;
};

export class StatusCodeDAL implements TStatusCodeDAL {
    id: string;
    name: string;

    constructor(status: TStatusCodeDAL) {
        this.id = status.id;
        this.name = status.name;
    }
}
