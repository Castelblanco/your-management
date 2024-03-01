export type TDepartmentDOM = {
    id: string;
    name: string;
    status?: TDepartmentStatusDOM;
};

export type TDepartmentStatusDOM = {
    id: string;
    name: string;
};

export type TDepartmentFilterDOM = {
    name?: string;
    statusId?: string;
};

export type TDepartmentOPT = {
    limit: number;
    offset: number;
};

export class DepartmentDOM implements TDepartmentDOM {
    id: string;
    name: string;
    status?: TDepartmentStatusDOM;

    constructor(department: TDepartmentDOM) {
        this.id = department.id;
        this.name = department.name;
        this.status = department.status;
    }
}
