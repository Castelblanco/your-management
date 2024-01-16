export class ListResponse<T> {
    items: T[];
    total: number;
    status: number;

    constructor(items: T[], status: number) {
        this.items = items;
        this.total = items.length;
        this.status = status;
    }
}
