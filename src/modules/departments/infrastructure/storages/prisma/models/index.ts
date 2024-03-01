import type { Department, Department_Status } from '@prisma/client';

export type TDepartmentDAL = Department & {
    status?: TDepartmentStatusDAL;
};

export type TDepartmentStatusDAL = Department_Status;

export class DepartmentDAL implements TDepartmentDAL {
    id: string;
    name: string;
    status_id: string;
    status?: TDepartmentStatusDAL;

    constructor(department: TDepartmentDAL) {
        this.id = department.id;
        this.name = department.name;
        this.status_id = department.status_id;
        this.status = department.status;
    }
}
