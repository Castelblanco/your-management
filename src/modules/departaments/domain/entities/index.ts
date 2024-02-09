export type TDepartamentDOM = {
    id: string;
    name: string;
    status?: TDepartamentStatusDOM;
};

export type TDepartamentStatusDOM = {
    id: string;
    name: string;
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
    status?: TDepartamentStatusDOM;

    constructor(departament: TDepartamentDOM) {
        this.id = departament.id;
        this.name = departament.name;
        this.status = departament.status;
    }
}
