export class ApiReponse<T> {
    item: T;
    status: number;

    constructor(item: T, status: number) {
        this.item = item;
        this.status = status;
    }
}
