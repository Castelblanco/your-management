export class ListResponse<T> {
    items: T[];
    total: number;
    status: number;

    constructor(items: T[], total: number, status: number) {
        this.items = items;
        this.total = total;
        this.status = status;
    }
}
