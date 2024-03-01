export type TDepartmentAPI = {
    _id: string;
    name: string;
    status?: TDepartmentStatusAPI;
};

export type TDepartmentStatusAPI = {
    _id: string;
    name: string;
};

export class DepartmentAPI implements TDepartmentAPI {
    _id: string;
    name: string;
    status?: TDepartmentStatusAPI;

    constructor(department: TDepartmentAPI) {
        this._id = department._id;
        this.name = department.name;
        this.status = department.status;
    }
}
