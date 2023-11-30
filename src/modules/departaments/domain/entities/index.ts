export type TDepartamentDOM = {
    id: string;
    name: string;
    statusId: string;
    status?: string;
};

export type TDepartamentFilterDOM = {
    name?: string;
    statusId?: string;
};

export type TDepartamentOPT = {
    limit: number;
    offset: number;
};

export class DepartamentDOM implements TDepartamentDOM {
    id: string;
    name: string;
    statusId: string;
    status?: string;

    constructor(departament: TDepartamentDOM) {
        this.id = departament.id;
        this.name = departament.name;
        this.statusId = departament.statusId;
        this.status = departament.status;
    }
}
