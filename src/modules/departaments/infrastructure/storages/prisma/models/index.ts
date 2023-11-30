export type TDepartamentDAL = {
    id: string;
    name: string;
    status_id: string;
    status?: TDepartamentStatusDAL;
};

export type TDepartamentStatusDAL = {
    id: string;
    name: string;
};

export class DepartamentDAL implements TDepartamentDAL {
    id: string;
    name: string;
    status_id: string;
    status?: TDepartamentStatusDAL;

    constructor(departament: TDepartamentDAL) {
        this.id = departament.id;
        this.name = departament.name;
        this.status_id = departament.status_id;
        this.status = departament.status;
    }
}
