export type TDepartamentAPI = {
    _id: string;
    name: string;
    status?: TDepartamentStatusAPI;
};

export type TDepartamentStatusAPI = {
    _id: string;
    name: string;
};

export class DepartamentAPI implements TDepartamentAPI {
    _id: string;
    name: string;
    status?: TDepartamentStatusAPI;

    constructor(departament: TDepartamentAPI) {
        this._id = departament._id;
        this.name = departament.name;
        this.status = departament.status;
    }
}
