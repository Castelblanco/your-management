export type TStatusCodeDOM = {
    id: string;
    name: string;
};

export type TStatusCodeType = 'points_sale' | 'users' | 'clients' | 'guides_service';

export class StatusCodeDOM implements TStatusCodeDOM {
    id: string;
    name: string;

    constructor(status: TStatusCodeDOM) {
        this.id = status.id;
        this.name = status.name;
    }
}
