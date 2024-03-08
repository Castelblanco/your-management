import type { Department, Department_Status, Prisma } from '@prisma/client';

export type TDepartmentDAL = Department & {
    status?: TDepartmentStatusDAL;
};

export type TDepartmentFilterDAL = {
    name?: Prisma.StringFilter;
    status_id?: Prisma.StringFilter;
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
