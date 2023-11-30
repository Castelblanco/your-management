export type TStatusCodeDOM = {
    id: string;
    name: string;
};

export class StatusCodeDOM implements TStatusCodeDOM {
    id: string;
    name: string;

    constructor(status: StatusCodeDOM) {
        this.id = status.id;
        this.name = status.name;
    }
}
