export type TStatusCodeDOM = {
    id: string;
    name: string;
};

export type TStatusCodeType =
    | 'cities'
    | 'department'
    | 'point_sales'
    | 'users'
    | 'clients'
    | 'guide_service';

export class StatusCodeDOM implements TStatusCodeDOM {
    id: string;
    name: string;

    constructor(status: TStatusCodeDOM) {
        this.id = status.id;
        this.name = status.name;
    }
}
