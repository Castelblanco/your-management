export type TDepartamentAPI = {
    id: string;
    name: string;
    status_id: string;
    status?: string;
};

export class DepartamentAPI implements TDepartamentAPI {
    id: string;
    name: string;
    status_id: string;
    status?: string;

    constructor(departament: TDepartamentAPI) {
        this.id = departament.id;
        this.name = departament.name;
        this.status_id = departament.status_id;
        this.status = departament.status;
    }
}
